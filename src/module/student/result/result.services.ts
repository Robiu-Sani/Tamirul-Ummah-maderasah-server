import { ExamInterface } from './result.interface';
import resultModel from './result.model';

const createResultsIntoDB = async (payload: ExamInterface) => {
  const existingResult = await resultModel.findOne({
    studentId: payload.studentId,
    examName: payload.examName,
  });

  if (existingResult) {
    return { alert: 'Result for this student and exam already exists.' };
  }

  const result = await resultModel.create(payload);
  return result;
};

const getAllResultIntoDB = async (skip: number) => {
  const result = await resultModel
    .find()
    .populate('studentId')
    .populate('teacherId')
    .skip(skip)
    .limit(50);

  return result;
};

const getResultTableDataIntoDB = async (
  skip: number,
  search?: string,
  studentClass?: string,
) => {
  const query: Record<string, unknown> = {};
  if (search) query.studentName = { $regex: search, $options: 'i' };
  if (studentClass) query.studentClass = studentClass;

  const data = await resultModel
    .find(query)
    .skip(skip)
    .limit(100)
    .select('studentName studentClass studentGender total examName');

  const stats = await resultModel.aggregate([
    {
      $facet: {
        totalMale: [{ $match: { studentGender: 'male' } }, { $count: 'count' }],
        totalFemale: [
          { $match: { studentGender: 'female' } },
          { $count: 'count' },
        ],
        uniqueClasses: [{ $group: { _id: '$studentClass' } }],
      },
    },
  ]);

  const totalMale = stats[0]?.totalMale[0]?.count || 0;
  const totalFemale = stats[0]?.totalFemale[0]?.count || 0;
  const uniqueClasses =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    stats[0]?.uniqueClasses.map((cls: any) => cls._id) || [];

  return {
    totalMale,
    totalFemale,
    totalStudents: totalMale + totalFemale,
    totalClass: uniqueClasses.length,
    uniqueClasses,
    data,
  };
};

const getSingleResultIntoDB = async (id: number) => {
  const result = resultModel
    .findById(id)
    .populate('studentId')
    .populate('teacherId');
  return result;
};

export const resultDB = {
  createResultsIntoDB,
  getAllResultIntoDB,
  getResultTableDataIntoDB,
  getSingleResultIntoDB,
};
