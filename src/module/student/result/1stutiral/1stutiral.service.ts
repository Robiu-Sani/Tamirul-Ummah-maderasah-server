import mongoose from 'mongoose';
import { ExamInterface } from '../result.interface';
import examSchema from '../result.model';

export const FristTutiralModel = mongoose.model('first-tutiral', examSchema);

const createFirstTutiralIntoDB = async (payload: ExamInterface) => {
  const result = await FristTutiralModel.create(payload);
  return result;
};

const getAllFirstTutiralIntoDB = async () => {
  const result = await FristTutiralModel.find()
    .populate('studentId')
    .populate('teacherId');
  return result;
};

const getSingleFirstTutiralIntoDB = async (id: string | number) => {
  const result = await FristTutiralModel.findById(id)
    .populate('studentId')
    .populate('teacherId');

  return result;
};

const deleteSingleFirstTutiralIntoDB = async (id: string | number) => {
  const result = await FristTutiralModel.findByIdAndDelete(id);
  return result;
};

const updateSingleByPatchFirstTutiralIntoDB = async (
  id: string | number,
  info: object,
) => {
  const result = await FristTutiralModel.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  return result;
};

const updateSingleByPutFirstTutiralIntoDB = async (
  id: string | number,
  info: object,
) => {
  const result = await FristTutiralModel.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  return result;
};

const getFirstTutiralExamTableData = async ({
  search = '',
  classFilter = '',
  limit = 10,
  skip = 0,
}: {
  search?: string;
  classFilter?: string;
  limit?: number;
  skip?: number;
  page: number;
}) => {
  try {
    // Build the query object based on filters
    const query: Record<string, unknown> = {};

    // Fetch exams and total counts
    const [exams, totalExams] = await Promise.all([
      FristTutiralModel.find(query)
        .populate('studentId')
        .populate('teacherId')
        .skip(skip)
        .limit(limit),
      FristTutiralModel.countDocuments(query),
    ]);

    // Aggregate data to calculate totalMale, totalFemale, and uniqueClasses
    const aggregationResults = await FristTutiralModel.aggregate([
      { $match: query }, // Apply the same query filters
      {
        $lookup: {
          from: 'students', // Collection name for students
          localField: 'studentId',
          foreignField: '_id',
          as: 'studentDetails',
        },
      },
      { $unwind: '$studentDetails' }, // Unwind student details
      {
        $group: {
          _id: null,
          totalMale: {
            $sum: {
              $cond: [{ $eq: ['$studentDetails.gender', 'male'] }, 1, 0],
            },
          },
          totalFemale: {
            $sum: {
              $cond: [{ $eq: ['$studentDetails.gender', 'female'] }, 1, 0],
            },
          },
          uniqueClasses: { $addToSet: '$studentDetails.class' },
        },
      },
    ]);

    if (search) {
      query['studentId.studentNameEnglish'] = { $regex: search, $options: 'i' };
    }

    if (classFilter) {
      query['studentId.class'] = classFilter;
    }

    // Extract aggregation results
    const totalMale = aggregationResults[0]?.totalMale || 0;
    const totalFemale = aggregationResults[0]?.totalFemale || 0;
    const uniqueClasses = aggregationResults[0]?.uniqueClasses || [];
    const totalClasses = uniqueClasses.length;

    // Calculate total pages
    const totalPages = Math.ceil(totalExams / limit);

    // Return the final result
    return {
      totalExams,
      totalMale,
      totalFemale,
      totalPages,
      totalClasses,
      uniqueClasses,
      exams,
    };
  } catch (error) {
    console.error('Error fetching exam data:', error);
    throw new Error('Unable to fetch exam data. Please try again later.');
  }
};

const FirstTutiralDB = {
  createFirstTutiralIntoDB,
  getAllFirstTutiralIntoDB,
  getSingleFirstTutiralIntoDB,
  deleteSingleFirstTutiralIntoDB,
  updateSingleByPatchFirstTutiralIntoDB,
  updateSingleByPutFirstTutiralIntoDB,
  getFirstTutiralExamTableData,
};
export default FirstTutiralDB;
