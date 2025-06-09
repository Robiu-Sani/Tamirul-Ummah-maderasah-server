import StudentModel from '../student/student.model';
import TeacherModel from '../teacher/teacher.model';
import UserModel from '../user/user.model';
import { authInterface } from './auth.interface';

const studentAuth = async (payload: authInterface) => {
  const { email, password } = payload;

  // Find all students with the provided email
  const students = await StudentModel.find({ email });

  if (students.length === 0) {
    throw new Error('Invalid email');
  }

  // Check if any student's password matches
  const matchedStudent = students.find(
    (student) => student.password == password,
  );

  if (!matchedStudent) {
    throw new Error('Invalid password');
  }
  if (matchedStudent.type !== 'student') {
    throw new Error('You are blocked');
  }

  // Return the matched student data
  return matchedStudent;
};

const teacherAuth = async (payload: authInterface) => {
  const { email, password } = payload;

  // Find the teacher with the provided email
  const teacher = await TeacherModel.findOne({ email });

  if (!teacher) {
    throw new Error('Invalid email');
  }

  // Compare the provided password with the stored password
  const teacherPassword = teacher.teacherPassword;

  // Check if the passwords match
  const isPasswordMatched = teacherPassword === password;

  if (!isPasswordMatched) {
    throw new Error('Invalid password');
  }

  // Check if the teacher has the correct type
  if (teacher.type === 'blocked') {
    throw new Error('You are blocked');
  }

  // Return the teacher data if authentication is successful
  return teacher;
};

export interface userAuthInterface {
  id: string;
  password: string | number;
}

const userAuth = async (payload: userAuthInterface) => {
  const { id, password } = payload;

  // Find the user with the provided ID
  const user =
    (await UserModel.findOne({ id: id })) ||
    (await TeacherModel.findOne({ id: id }));

  if (!user) {
    throw new Error('Invalid user ID');
  }

  // Compare the provided password with the stored password
  const isPasswordMatched = user.password === password;

  if (!isPasswordMatched) {
    throw new Error('Invalid password');
  }

  let member;
  if (user.role === 'student') {
    member = await StudentModel.findOne({ id: user.id });
  } else {
    member = await TeacherModel.findOne({ id: user.id });
  }

  return { user, member };
};

const authDB = {
  studentAuth,
  teacherAuth,
  userAuth,
};
export default authDB;
