import { StafeDetails } from './stafe.interface';
import StafeModel from './stafe.model';

const createStafeIntoDB = async (payload: StafeDetails) => {
  const result = await StafeModel.create(payload);
  return result;
};

const getAllStafeIntoDB = async () => {
  const result = await StafeModel.find();
  return result;
};

const getSingleStafeIntoDB = async (id: string | number) => {
  const result = await StafeModel.findById(id);

  return result;
};

const deleteSingleStafeIntoDB = async (id: string | number) => {
  const result = await StafeModel.findByIdAndDelete(id);
  return result;
};

const updateSingleByPatchStafeIntoDB = async (
  id: string | number,
  info: object,
) => {
  const result = await StafeModel.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  return result;
};

const updateSingleByPutStafeIntoDB = async (
  id: string | number,
  info: object,
) => {
  const result = await StafeModel.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  return result;
};

const getStaffTableDataDB = async ({
  search = '',
  classFilter = '',
  limit,
  skip,
}: {
  page?: number;
  search?: string;
  classFilter?: string;
  limit: number;
  skip: number;
}) => {
  // Build the query object based on filters
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const query: Record<string, any> = {};

  if (search) {
    query.staffName = { $regex: search, $options: 'i' };
  }

  if (classFilter) {
    query.residentialStatus = classFilter;
  }

  // Fetch students, count total students, and fetch unique classes
  const [teachers, allTeachers] = await Promise.all([
    StafeModel.find(query)
      .select(
        'bloodGroup department staffName phone gender email residentialStatus',
      )
      .skip(skip)
      .limit(limit),
    StafeModel.find(query).select('residentialStatus'),
  ]);

  const reversedStaff = teachers.reverse();

  const totalMale = await StafeModel.countDocuments({ gender: 'male' });
  const totalFemale = await StafeModel.countDocuments({ gender: 'female' });
  const uniqueClasses = await StafeModel.distinct('residentialStatus');

  // Count total students based on filters
  const totalStaffs = allTeachers.length;

  const totalPages = Math.ceil(totalStaffs / limit);

  // Return the final result
  return {
    totalStaffs,
    totalMale,
    totalFemale,
    totalPages,
    totalClasses: uniqueClasses.length,
    uniqueClasses,
    staff: reversedStaff,
  };
};

const staffClientSideIntoDB = async () => {
  const result = await StafeModel.find().select('staffImage staffName phone');
  return result;
};

const StafeDB = {
  createStafeIntoDB,
  getAllStafeIntoDB,
  getSingleStafeIntoDB,
  deleteSingleStafeIntoDB,
  updateSingleByPatchStafeIntoDB,
  updateSingleByPutStafeIntoDB,
  getStaffTableDataDB,
  staffClientSideIntoDB,
};
export default StafeDB;
