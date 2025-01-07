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
  const query: Record<string, any> = {};

  if (search) {
    query.teacherName = { $regex: search, $options: 'i' };
  }

  if (classFilter) {
    query.shift = classFilter;
  }

  // Fetch students, count total students, and fetch unique classes
  const [teachers, allTeachers] = await Promise.all([
    TeacherModel.find(query)
      .select(
        'bloodGroup phone gender email type residentialStatus teacherName shift',
      )
      .skip(skip)
      .limit(limit),
    TeacherModel.find(query).select('shift'),
  ]);

  const reversedTeachers = teachers.reverse();

  const totalMale = await TeacherModel.countDocuments({ gender: 'male' });
  const totalFemale = await TeacherModel.countDocuments({ gender: 'female' });
  const uniqueClasses = await TeacherModel.distinct('shift');

  // Count total students based on filters
  const totalTeachers = allTeachers.length;

  const totalPages = Math.ceil(totalTeachers / limit);

  // Return the final result
  return {
    totalTeachers,
    totalMale,
    totalFemale,
    totalPages,
    totalClasses: uniqueClasses.length,
    uniqueClasses,
    teacher: reversedTeachers,
  };
};

const getClientSiteTeacher = async () => {
  const result = await TeacherModel.find().select(
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
