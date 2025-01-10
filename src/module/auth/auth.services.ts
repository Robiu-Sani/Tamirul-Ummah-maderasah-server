import StudentModel from '../student/student.model';
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

const authDB = {
  studentAuth,
};
export default authDB;
