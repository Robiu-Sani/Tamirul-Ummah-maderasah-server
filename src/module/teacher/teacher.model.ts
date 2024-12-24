import mongoose from 'mongoose';
import { TeacherDetails } from './teacher.interface';

const generateRandomPassword = () => {
  return Math.floor(10000000 + Math.random() * 90000000).toString();
};

const TeacherDetailsSchema = new mongoose.Schema<TeacherDetails>(
  {
    address: { type: String, required: true },
    bloodGroup: { type: String, required: true },
    dateOfBirth: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    experience: { type: String, required: false },
    nidNumber: { type: Number, required: false },
    teacherImage: {
      type: String,
      default:
        'https://i.postimg.cc/8Ph6x2Kc/115-1150152-default-profile-picture-avatar-png-green.png',
    },
    gender: { type: String, required: true },
    phone: { type: String, required: true },
    qualification: { type: String, required: true },
    residentialStatus: { type: String, required: false },
    section: { type: String, required: true },
    shift: { type: String, required: true },
    subject: { type: String, required: true },
    teacherName: { type: String, required: true },
    type: { type: String, required: true, default: 'teacher' },
    teacherPassword: {
      type: mongoose.Schema.Types.Mixed,
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
