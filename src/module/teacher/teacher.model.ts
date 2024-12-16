import mongoose from 'mongoose';
import { TeacherDetails } from './teacher.interface';

const generateRandomPassword = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

const TeacherDetailsSchema = new mongoose.Schema<TeacherDetails>(
  {
    address: { type: String, required: true },
    bloodGroup: { type: String, required: true },
    dateOfBirth: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    experience: { type: String, required: false },
    teacherImage: { type: String, default: null },
    gender: { type: String, required: true },
    phone: { type: String, required: true },
    qualification: { type: String, required: true },
    residentialStatus: { type: String, required: false },
    section: { type: String, required: true },
    shift: { type: String, required: true },
    subject: { type: String, required: true },
    teacherName: { type: String, required: true },
    teacherPassword: {
      type: String,
      required: true,
      default: generateRandomPassword,
    },
  },
  {
    timestamps: true,
  },
);

const TeacherModel = mongoose.model('teacher', TeacherDetailsSchema);
export default TeacherModel;
