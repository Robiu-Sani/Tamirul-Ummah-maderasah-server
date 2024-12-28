import { GairdeanInformation } from './gairdean.interface';
import GairdeanModel from './gairdean.model';

const createGairdeanIntoDB = async (payload: GairdeanInformation) => {
  const result = await GairdeanModel.create(payload);
  return result;
};

const getAllGairdeanIntoDB = async () => {
  const result = await GairdeanModel.find().populate('studentId');
  return result;
};

const getSingleGairdeanIntoDB = async (id: string | number) => {
  const result = await GairdeanModel.findById(id).populate('studentId');
  return result;
};

const deleteSingleGairdeanIntoDB = async (id: string | number) => {
  const result = await GairdeanModel.findByIdAndDelete(id);
  return result;
};

const updateSingleByPatchGairdeanIntoDB = async (
  id: string | number,
  info: object,
) => {
  const result = await GairdeanModel.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  return result;
};

const updateSingleByPutGairdeanIntoDB = async (
  id: string | number,
  info: object,
) => {
  const result = await GairdeanModel.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  return result;
};

const getGairdeanTableDataDB = async ({
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
    query.gairdeanNameEn = { $regex: search, $options: 'i' };
  }

  // Fetch students, count total students, and fetch unique classes
  const [gairdeans, allGairdeans] = await Promise.all([
    GairdeanModel.find(query)
      .select(
        'mobilenumber workLocation bloodGroup monthlyIncome gairdeanNameEn',
      )
      .skip(skip)
      .limit(limit),
    GairdeanModel.find(query).select('bloodGroup'),
  ]);

  const reversedGairdeans = gairdeans.reverse();

  // Count total students based on filters
  const totalGairdeans = allGairdeans.length;

  const totalPages = Math.ceil(totalGairdeans / limit);

  // Return the final result
  return {
    totalPages,
    totalGairdeans,
    gairdeans: reversedGairdeans,
  };
};

const GairdeanDB = {
  createGairdeanIntoDB,
  getAllGairdeanIntoDB,
  getSingleGairdeanIntoDB,
  deleteSingleGairdeanIntoDB,
  updateSingleByPatchGairdeanIntoDB,
  updateSingleByPutGairdeanIntoDB,
  getGairdeanTableDataDB,
};
export default GairdeanDB;
