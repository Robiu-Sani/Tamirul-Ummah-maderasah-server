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
  const matchedStudent = students.find((student) => {
    // Ensure `student.password` is an array
    if (Array.isArray(student.password)) {
      return student.password.includes(password); // Check if password matches
    }
    return false; // Return false if password is not an array
  });

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
