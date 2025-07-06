import PostModel from '../post/post.model';
import UserModel from '../user/user.model';
import fatherModel from './father/father.model';
import GairdeanModel from './gairdean/gairdean.model';
import MotherModel from './mother/mother.model';
import resultModel from './result/result.model';
import { StudentInfo } from './student.interface';
import StudentModel from './student.model';

const createStudentIntoDB = async (payload: StudentInfo) => {
  const currentYear = new Date().getFullYear().toString();
  const yearPrefix = currentYear;
  const lastStudentOfYear = await StudentModel.findOne({
    id: { $regex: `^${yearPrefix}` },
  }).sort({ createdAt: -1 });
  let newSerialNumber = 1;
  if (lastStudentOfYear && lastStudentOfYear.id) {
    const lastId = lastStudentOfYear.id;
    const lastSerial = parseInt(lastId.slice(4), 10);
    newSerialNumber = lastSerial + 1;
  }

  const serialPart = newSerialNumber.toString().padStart(4, '0');
  const studentId = `${yearPrefix}${serialPart}`;
  payload.id = studentId;

  const password = Math.floor(10000000 + Math.random() * 90000000).toString();
  payload.password = password;

  const userData = {
    name: payload.studentNameEnglish,
    id: studentId,
    role: 'student',
    password,
    image: payload.image || '',
    class: payload.class || '',
  };

  // Create the user in the UserModel
  const user = await UserModel.create(userData);

  const result = await StudentModel.create(payload);
  return { result, user };
};

const getAllStudentIntoDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSearchBarData = async ({ search = '' }: { search: string }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const query: Record<string, any> = {};

  if (search) {
    query.studentNameEnglish = { $regex: search, $options: 'i' };
  }

  const result = await StudentModel.find(query)
    .select('studentNameEnglish image class gender classRoll ')
    .skip(0)
    .limit(15);
  return result;
};

const getTableData = async ({
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
    query.studentNameEnglish = { $regex: search, $options: 'i' };
  }

  if (classFilter) {
    query.class = classFilter;
  }

  // Fetch students, count total students, and fetch unique classes
  const [students, allStudents] = await Promise.all([
    StudentModel.find(query)
      .select(
        'bloodGroup class gender classRoll type section isRunning id studentNameEnglish',
      )
      .skip(skip)
      .limit(limit),
    StudentModel.find(query).select('class'),
  ]);

  const reversedStudents = students.reverse();

  const totalMale = await StudentModel.countDocuments({ gender: 'male' });
  const totalFemale = await StudentModel.countDocuments({ gender: 'female' });
  const uniqueClasses = await StudentModel.distinct('class');

  // Count total students based on filters
  const totalStudents = allStudents.length;

  const totalPages = Math.ceil(totalStudents / limit);

  // Return the final result
  return {
    totalStudents,
    totalMale,
    totalFemale,
    totalPages,
    totalClasses: uniqueClasses.length,
    uniqueClasses,
    students: reversedStudents,
  };
};

const getSingleStudentIntoDB = async (id: string | number) => {
  const student = await StudentModel.findById(id);
  const father = await fatherModel.findOne({ studentId: id });
  const mother = await MotherModel.findOne({ studentId: id });
  const posts = await PostModel.find({ studentID: id })
    .populate('studentID')
    .sort({ _id: -1 });
  const gairdean = await GairdeanModel.findOne({ studentId: id });
  const results = await resultModel.find({ studentId: id });
  const result = {
    student,
    father,
    mother,
    gairdean,
    results,
    posts,
  };
  return result;
};

const deleteSingleStudentIntoDB = async (id: string | number) => {
  // const result = await StudentModel.findByIdAndDelete(id);
  const student = await StudentModel.findByIdAndDelete(id);
  const father = await fatherModel.findOneAndDelete({ studentId: id });
  const mother = await MotherModel.findOneAndDelete({ studentId: id });
  const posts = await PostModel.deleteMany({ studentID: id });
  const results = await resultModel.deleteMany({ studentId: id });
  const gairdean = await GairdeanModel.findOneAndDelete({ studentId: id });

  const result = {
    student,
    father,
    mother,
    gairdean,
    results,
    posts,
  };

  return result;
};

const updateSingleByPatchStudentIntoDB = async (
  id: string | number,
  info: object,
) => {
  const result = await StudentModel.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  return result;
};

const updateSingleByPutStudentIntoDB = async (
  id: string | number,
  info: object,
) => {
  const result = await StudentModel.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  return result;
};

const getStudentByClassIntoDB = async (
  className: string,
  gender: string,
): Promise<
  {
    studentNameEnglish: string;
    classRoll: number;
    gender: string; // Remove `undefined` here
  }[]
> => {
  const result = await StudentModel.find({
    class: className,
    gender: gender,
  }).select('studentNameEnglish classRoll gender');
  return result;
};

const StudentDB = {
  createStudentIntoDB,
  getAllStudentIntoDB,
  getSingleStudentIntoDB,
  deleteSingleStudentIntoDB,
  updateSingleByPatchStudentIntoDB,
  updateSingleByPutStudentIntoDB,
  getTableData,
  getStudentByClassIntoDB,
  getSearchBarData,
};
export default StudentDB;
