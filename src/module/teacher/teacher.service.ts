import { TeacherDetails } from './teacher.interface';
import TeacherModel from './teacher.model';

const createTeacherIntoDB = async (payload: TeacherDetails) => {
  const result = await TeacherModel.create(payload);
  return result;
};

const getAllTeacherIntoDB = async () => {
  const result = await TeacherModel.find();
  return result;
};

const getSingleTeacherIntoDB = async (id: string | number) => {
  const result = await TeacherModel.findById(id);

  return result;
};

const deleteSingleTeacherIntoDB = async (id: string | number) => {
  const result = await TeacherModel.findByIdAndDelete(id);
  return result;
};

const updateSingleByPatchTeacherIntoDB = async (
  id: string | number,
  info: object,
) => {
  const result = await TeacherModel.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  return result;
};

const updateSingleByPutTeacherIntoDB = async (
  id: string | number,
  info: object,
) => {
  const result = await TeacherModel.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  return result;
};

const getTeacherTableDataDB = async ({
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
  const query: Record<string, any> = {
    _id: { $ne: '678fd6cc7ea4d5600640e9ba' }, // Exclude the specific ID
  };

  if (search) {
    query.teacherName = { $regex: search, $options: 'i' };
  }

  if (classFilter) {
    query.shift = classFilter;
  }

  // Fetch teachers with pagination
  const [teachers, totalTeachers, uniqueClasses] = await Promise.all([
    TeacherModel.find(query)
      .select(
        'bloodGroup phone gender email type residentialStatus teacherName shift',
      )
      .skip(skip)
      .limit(limit),
    TeacherModel.countDocuments(query), // Proper count for total teachers
    TeacherModel.distinct('shift', query), // Fetch unique classes
  ]);

  const reversedTeachers = teachers.reverse();

  const totalMale = await TeacherModel.countDocuments({
    ...query,
    gender: 'male',
  });
  const totalFemale = await TeacherModel.countDocuments({
    ...query,
    gender: 'female',
  });

  const totalPages = Math.ceil(totalTeachers / limit);

  // Return the final result
  return {
    totalTeachers, // Total teachers count based on filters
    totalMale,
    totalFemale,
    totalPages,
    totalClasses: uniqueClasses.length,
    uniqueClasses,
    teacher: reversedTeachers,
  };
};

const getClientSiteTeacher = async () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const query: Record<string, any> = {
    _id: { $ne: '678fd6cc7ea4d5600640e9ba' }, // Exclude the specific ID
  };
  const result = await TeacherModel.find(query).select(
    'teacherImage phone subject teacherName',
  );
  return result;
};

const TeacherDB = {
  createTeacherIntoDB,
  getAllTeacherIntoDB,
  getTeacherTableDataDB,
  getSingleTeacherIntoDB,
  deleteSingleTeacherIntoDB,
  updateSingleByPatchTeacherIntoDB,
  updateSingleByPutTeacherIntoDB,
  getClientSiteTeacher,
};
export default TeacherDB;
