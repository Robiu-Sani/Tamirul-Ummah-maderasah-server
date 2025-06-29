import UserModel from '../user/user.model';
import { TeacherDetails } from './teacher.interface';
import TeacherModel from './teacher.model';

const createTeacherIntoDB = async (payload: TeacherDetails) => {
  const currentYear = new Date().getFullYear().toString();
  const yearPrefix = currentYear;

  const lastTeacherOfYear = await TeacherModel.findOne({
    id: { $regex: `^${yearPrefix}` },
  }).sort({ createdAt: -1 });

  let newSerialNumber = 1;
  if (lastTeacherOfYear && lastTeacherOfYear.id) {
    const lastId = lastTeacherOfYear.id;
    const lastSerial = parseInt(lastId.slice(3), 10);
    newSerialNumber = lastSerial + 1;
  }

  console.log(newSerialNumber, lastTeacherOfYear);

  const serialPart = newSerialNumber.toString().padStart(3, '0');
  const teacherId = `${yearPrefix}${serialPart}`;

  const password = Math.floor(10000000 + Math.random() * 90000000).toString();

  const userData = {
    name: payload.teacherName,
    id: teacherId,
    role: 'teacher',
    password,
    image: payload.teacherImage || '',
    class: payload.shift,
  };

  const TeacherData = {
    ...payload,
    id: teacherId,
    teacherPassword: password,
  };

  const teacher = await TeacherModel.create(TeacherData);
  const user = await UserModel.create(userData);

  return {
    teacher,
    user,
  };
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
