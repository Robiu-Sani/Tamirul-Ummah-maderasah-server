/* eslint-disable @typescript-eslint/no-explicit-any */
import { SortOrder } from 'mongoose';
import { IfinalTutorialExam } from './final.interface';
import FinalTutorialExamModel from './final.model';
import { SecendTutiral } from '../Secend/Secend.model';
import { healfTutiral } from '../Healf/Healf.model';

// Basic pagination interface
interface PaginationOptions {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

interface PaginationResult<T> {
  data: T[];
  page: number;
  limit: number;
  total: number;
}

export const healfTutorialExamService = {
  // Create new exam
  async createExam(examData: IfinalTutorialExam): Promise<IfinalTutorialExam> {
    const firstTutiral = await SecendTutiral.findOne({
      examName: `Second Tutorial ${new Date().getFullYear()}`,
      userId: examData.userId,
    });
    const halfyearly = await healfTutiral.findOne({
      examName: `Half Yearly Exam ${new Date().getFullYear()}`,
      userId: examData.userId,
    });
    const parcentageFromFirst = firstTutiral?.parcentage ?? 0;
    const parcentageFromsecond = halfyearly?.parcentageTotal ?? 0;
    const parcentage = parcentageFromFirst + examData.parcentage;
    const finalParcentage = parcentage + parcentageFromsecond;
    const finalData = {
      ...examData,
      parcentageTotal: parcentage,
      finalParcentTotal: finalParcentage,
    };

    return await FinalTutorialExamModel.create(finalData);
  },

  // Get all exams with pagination and search
  async getAllExams(
    filters: { searchTerm?: string } & Partial<
      Record<'teacherId' | 'userId' | 'examName' | 'examYear', any>
    >,
    paginationOptions: PaginationOptions,
  ): Promise<PaginationResult<IfinalTutorialExam>> {
    const { searchTerm, ...filtersData } = filters;
    const { page = 1, limit = 10, sortBy, sortOrder } = paginationOptions;

    const query: any = {};

    if (searchTerm) {
      query.$or = [
        { examName: { $regex: searchTerm, $options: 'i' } },
        { 'subject.subjectName': { $regex: searchTerm, $options: 'i' } },
      ];
    }

    // Exact match for other filters
    if (Object.keys(filtersData).length) {
      Object.keys(filtersData).forEach((key) => {
        query[key] = filtersData[key as keyof typeof filtersData];
      });
    }

    query.isDeleted = false;

    const skip = (page - 1) * limit;
    const sortOptions: { [key: string]: SortOrder } = {};
    if (sortBy && sortOrder) {
      sortOptions[sortBy] = sortOrder === 'asc' ? 1 : -1;
    }

    const [data, total] = await Promise.all([
      FinalTutorialExamModel.find(query)
        .sort(sortOptions)
        .skip(skip)
        .limit(limit)
        .exec(),
      FinalTutorialExamModel.countDocuments(query),
    ]);

    return {
      data,
      page,
      limit,
      total,
    };
  },

  // Get exams by teacher ID
  async getExamsByTeacher(
    teacherId: string,
    paginationOptions: PaginationOptions,
  ): Promise<PaginationResult<IfinalTutorialExam>> {
    return this.getAllExams({ teacherId }, paginationOptions);
  },

  // Get exams by user ID
  async getExamsByUser(
    userId: string,
    paginationOptions: PaginationOptions,
  ): Promise<PaginationResult<IfinalTutorialExam>> {
    return this.getAllExams({ userId }, paginationOptions);
  },

  // Get exams by exam name
  async getExamsByName(
    examName: string,
    paginationOptions: PaginationOptions,
  ): Promise<PaginationResult<IfinalTutorialExam>> {
    return this.getAllExams({ examName }, paginationOptions);
  },

  // Get exams by year
  async getExamsByYear(
    year: number,
    paginationOptions: PaginationOptions,
  ): Promise<PaginationResult<IfinalTutorialExam>> {
    return this.getAllExams({ examYear: year }, paginationOptions);
  },

  // Get exams by year with subjects under 33%
  async getExamsWithFailedSubjects(
    year: number,
    paginationOptions: PaginationOptions,
  ): Promise<PaginationResult<IfinalTutorialExam>> {
    const { page = 1, limit = 10 } = paginationOptions;
    const skip = (page - 1) * limit;

    const query = {
      examYear: year,
      'subject.parcentage': { $lt: 33 },
      isDeleted: false,
    };

    const [data, total] = await Promise.all([
      FinalTutorialExamModel.aggregate([
        { $match: query },
        {
          $addFields: {
            failedSubjectsCount: {
              $size: {
                $filter: {
                  input: '$subject',
                  as: 'subj',
                  cond: { $lt: ['$$subj.parcentage', 33] },
                },
              },
            },
          },
        },
        {
          $sort: {
            failedSubjectsCount: -1,
            totatlMarks: 1,
          },
        },
        { $skip: skip },
        { $limit: limit },
      ]),
      FinalTutorialExamModel.countDocuments(query),
    ]);

    return {
      data,
      page,
      limit,
      total,
    };
  },

  // Update exam
  async updateExam(
    id: string,
    updateData: Partial<IfinalTutorialExam>,
  ): Promise<IfinalTutorialExam | null> {
    return await FinalTutorialExamModel.findByIdAndUpdate(id, updateData, {
      new: true,
    });
  },

  // Delete exam (soft delete)
  async deleteExam(id: string): Promise<IfinalTutorialExam | null> {
    return await FinalTutorialExamModel.findByIdAndUpdate(
      id,
      { isDeleted: true },
      { new: true },
    );
  },
};
