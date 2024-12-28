import { MotherInformation } from './mother.interface';
import MotherModel from './mother.model';

const createMotherIntoDB = async (payload: MotherInformation) => {
  const result = await MotherModel.create(payload);
  return result;
};

const getAllMotherIntoDB = async () => {
  const result = await MotherModel.find().populate('studentId');
  return result;
};

const getSingleMotherIntoDB = async (id: string | number) => {
  const result = await MotherModel.findById(id).populate('studentId');
  return result;
};

const deleteSingleMotherIntoDB = async (id: string | number) => {
  const result = await MotherModel.findByIdAndDelete(id);
  return result;
};

const updateSingleByPatchMotherIntoDB = async (
  id: string | number,
  info: object,
) => {
  const result = await MotherModel.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  return result;
};

const updateSingleByPutMotherIntoDB = async (
  id: string | number,
  info: object,
) => {
  const result = await MotherModel.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  return result;
};

const getMotherTableDataDB = async ({
  search = '',
  // classFilter = '',
  limit,
  skip,
}: {
  page?: number;
  search?: string;
  // classFilter?: string;
  limit: number;
  skip: number;
}) => {
  // Build the query object based on filters
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const query: Record<string, any> = {};

  if (search) {
    query.motherNameEn = { $regex: search, $options: 'i' };
  }

  // Fetch students, count total students, and fetch unique classes
  const [mothers, allMothers] = await Promise.all([
    MotherModel.find(query)
      .select('mobilenumber workLocation bloodGroup monthlyIncome motherNameEn')
      .skip(skip)
      .limit(limit),
    MotherModel.find(query).select('bloodGroup'),
  ]);

  const reversedMothers = mothers.reverse();

  // Count total students based on filters
  const totalMothers = allMothers.length;

  const totalPages = Math.ceil(totalMothers / limit);

  // Return the final result
  return {
    totalPages,
    totalMothers,
    mothers: reversedMothers,
  };
};

const MotherDB = {
  createMotherIntoDB,
  getAllMotherIntoDB,
  getSingleMotherIntoDB,
  deleteSingleMotherIntoDB,
  updateSingleByPatchMotherIntoDB,
  updateSingleByPutMotherIntoDB,
  getMotherTableDataDB,
};
export default MotherDB;
