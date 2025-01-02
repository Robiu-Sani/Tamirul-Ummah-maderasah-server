import { ExamInterface } from './result.interface';
import resultModel from './result.model';

const createResultsIntoDB = async (payload: ExamInterface) => {
  const result = resultModel.create(payload);
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const query: Record<string, any> = {};

  if (search) {
    query.studentNameEnglish = { $regex: search, $options: 'i' };
  }

  if (studentClass) {
    query.studentClass = studentClass;
  }

  const result = resultModel
    .find()
    .select(
      'examName studentName studentClass studentGender piyerAndCarecter total',
    )
    .skip(skip)
    .limit(100);

  return result;
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
