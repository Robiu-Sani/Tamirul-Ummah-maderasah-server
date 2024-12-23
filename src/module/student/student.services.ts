import PostModel from '../post/post.model';
import fatherModel from './father/father.model';
import GairdeanModel from './gairdean/gairdean.model';
import MotherModel from './mother/mother.model';
import { FristSamisterModel } from './result/1stsamester/1stsamester.service';
import { FristTutiralModel } from './result/1stutiral/1stutiral.service';
import { SecendSamisterModel } from './result/2ndsamester/2ndsamester.service';
import { SecendTutiralModel } from './result/2stutiral/2ndtutiral.services';
import { StudentInfo } from './student.interface';
import StudentModel from './student.model';

const createStudentIntoDB = async (payload: StudentInfo) => {
  const result = await StudentModel.create(payload);
  return result;
};

const getAllStudentIntoDB = async () => {
  const result = await StudentModel.find();
  return result;
};

export const getTableData = async ({
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
        'bloodGroup class gender classRoll type section studentNameEnglish',
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

// const getTableData = async () => {
//   const students = (await StudentModel.find().select(
//     'bloodGroup class gender classRoll section studentNameEnglish',
//   )) as {
//     bloodGroup: string;
//     class: string;
//     gender: string;
//     classRoll: number;
//     section: string;
//     studentNameEnglish: string;
//   }[];

//   let totalMale: number = 0;
//   let totalFemale: number = 0;
//   const classSet = new Set<string>();

//   // Iterate through the students array
//   students.forEach((student) => {
//     if (student.gender === 'male') {
//       totalMale++;
//     } else if (student.gender === 'female') {
//       totalFemale++;
//     }
//     classSet.add(student.class); // Ensure `student.class` is treated as a string
//   });

//   const totalStudents: number = students.length;

//   // Convert the set of classes to an array
//   const uniqueClasses: string[] = Array.from(classSet);

//   const result = {
//     totalStudents,
//     totalMale,
//     totalFemale,
//     totalClasses: classSet.size, // Total number of unique classes
//     uniqueClasses, // Array of unique class names
//     students,
//   };

//   return result;
// };

const getSingleStudentIntoDB = async (id: string | number) => {
  const student = await StudentModel.findById(id);
  const father = await fatherModel.findOne({ studentId: id });
  const mother = await MotherModel.findOne({ studentId: id });
  const posts = await PostModel.find({ studentID: id });
  const gairdean = await GairdeanModel.findOne({ studentId: id });
  const first_tutiral = await FristTutiralModel.findOne({ studentId: id });
  const first_samistar = await FristSamisterModel.findOne({ studentId: id });
  const secend_tutiral = await SecendTutiralModel.findOne({ studentId: id });
  const secend_samistar = await SecendSamisterModel.findOne({ studentId: id });
  const result = {
    student,
    father,
    mother,
    gairdean,
    posts,
    result: {
      first_tutiral,
      first_samistar,
      secend_tutiral,
      secend_samistar,
    },
  };
  return result;
};

const deleteSingleStudentIntoDB = async (id: string | number) => {
  // const result = await StudentModel.findByIdAndDelete(id);
  const student = await StudentModel.findByIdAndDelete(id);
  const father = await fatherModel.findOneAndDelete({ studentId: id });
  const mother = await MotherModel.findOneAndDelete({ studentId: id });
  const posts = await PostModel.deleteMany({ studentID: id });
  const gairdean = await GairdeanModel.findOneAndDelete({ studentId: id });
  const first_tutiral = await FristTutiralModel.findOneAndDelete({
    studentId: id,
  });
  const first_samistar = await FristSamisterModel.findOneAndDelete({
    studentId: id,
  });
  const secend_tutiral = await SecendTutiralModel.findOneAndDelete({
    studentId: id,
  });
  const secend_samistar = await SecendSamisterModel.findOneAndDelete({
    studentId: id,
  });
  const result = {
    student,
    father,
    mother,
    gairdean,
    posts,
    result: {
      first_tutiral,
      first_samistar,
      secend_tutiral,
      secend_samistar,
    },
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

const StudentDB = {
  createStudentIntoDB,
  getAllStudentIntoDB,
  getSingleStudentIntoDB,
  deleteSingleStudentIntoDB,
  updateSingleByPatchStudentIntoDB,
  updateSingleByPutStudentIntoDB,
  getTableData,
};
export default StudentDB;
