import { UserInformation } from './father.interface';
import fatherModel from './father.model';

const createFatherIntoDB = async (payload: UserInformation) => {
  const result = await fatherModel.create(payload);
  return result;
};

const getAllFatherIntoDB = async () => {
  const result = await fatherModel.find().populate('studentId');
  return result;
};

const getSingleFatherIntoDB = async (id: string | number) => {
  const result = await fatherModel.findById(id).populate('studentId');
  return result;
};

const deleteSingleFatherIntoDB = async (id: string | number) => {
  const result = await fatherModel.findByIdAndDelete(id);
  return result;
};

const updateSingleByPatchFatherIntoDB = async (
  id: string | number,
  info: object,
) => {
  const result = await fatherModel.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  return result;
};

const updateSingleByPutFatherIntoDB = async (
  id: string | number,
  info: object,
) => {
  const result = await fatherModel.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  return result;
};

const getFatherTableDataDB = async ({
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
    query.fatherNameEn = { $regex: search, $options: 'i' };
  }

  // Fetch students, count total students, and fetch unique classes
  const [fathers, allFathers] = await Promise.all([
    fatherModel
      .find(query)
      .select('mobilenumber workLocation bloodGroup monthlyIncome fatherNameEn')
      .skip(skip)
      .limit(limit),
    fatherModel.find(query).select('bloodGroup'),
  ]);

  const reversedFathers = fathers.reverse();

  // Count total students based on filters
  const totalFathers = allFathers.length;

  const totalPages = Math.ceil(totalFathers / limit);

  // Return the final result
  return {
    totalPages,
    totalFathers,
    fathers: reversedFathers,
  };
};

const FatherDB = {
  createFatherIntoDB,
  getAllFatherIntoDB,
  getSingleFatherIntoDB,
  deleteSingleFatherIntoDB,
  updateSingleByPatchFatherIntoDB,
  updateSingleByPutFatherIntoDB,
  getFatherTableDataDB,
};
export default FatherDB;
