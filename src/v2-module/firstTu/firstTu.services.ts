/* eslint-disable @typescript-eslint/no-explicit-any */
import { SortOrder } from 'mongoose';
import { IFirstTutorialExam } from './firstTu.inerface';
import { FirstTutiral } from './firstTu.model';

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

export const FirstTutorialExamService = {
  // Create new exam
  async createExam(examData: IFirstTutorialExam): Promise<IFirstTutorialExam> {
    return await FirstTutiral.create(examData);
  },

  // Get all exams with pagination and search
  async getAllExams(
    filters: { searchTerm?: string } & Partial<
      Record<'teacherId' | 'userId' | 'examName' | 'examYear', any>
    >,
    paginationOptions: PaginationOptions,
  ): Promise<PaginationResult<IFirstTutorialExam>> {
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
      FirstTutiral.find(query).sort(sortOptions).skip(skip).limit(limit).exec(),
      FirstTutiral.countDocuments(query),
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
  ): Promise<PaginationResult<IFirstTutorialExam>> {
    return this.getAllExams({ teacherId }, paginationOptions);
  },

  // Get exams by user ID
  async getExamsByUser(
    userId: string,
    paginationOptions: PaginationOptions,
  ): Promise<PaginationResult<IFirstTutorialExam>> {
    return this.getAllExams({ userId }, paginationOptions);
  },

  // Get exams by exam name
  async getExamsByName(
    examName: string,
    paginationOptions: PaginationOptions,
  ): Promise<PaginationResult<IFirstTutorialExam>> {
    return this.getAllExams({ examName }, paginationOptions);
  },

  // Get exams by year
  async getExamsByYear(
    year: number,
    paginationOptions: PaginationOptions,
  ): Promise<PaginationResult<IFirstTutorialExam>> {
    return this.getAllExams({ examYear: year }, paginationOptions);
  },

  // Get exams by year with subjects under 33%
  async getExamsWithFailedSubjects(
    year: number,
    paginationOptions: PaginationOptions,
  ): Promise<PaginationResult<IFirstTutorialExam>> {
    const { page = 1, limit = 10 } = paginationOptions;
    const skip = (page - 1) * limit;

    const query = {
      examYear: year,
      'subject.parcentage': { $lt: 33 },
      isDeleted: false,
    };

    const [data, total] = await Promise.all([
      FirstTutiral.aggregate([
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
      FirstTutiral.countDocuments(query),
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
    updateData: Partial<IFirstTutorialExam>,
  ): Promise<IFirstTutorialExam | null> {
    return await FirstTutiral.findByIdAndUpdate(id, updateData, { new: true });
  },

  // Delete exam (soft delete)
  async deleteExam(id: string): Promise<IFirstTutorialExam | null> {
    return await FirstTutiral.findByIdAndUpdate(
      id,
      { isDeleted: true },
      { new: true },
    );
  },
};
