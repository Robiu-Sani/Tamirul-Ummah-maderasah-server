import mongoose from 'mongoose';
import { TeacherDetails } from './teacher.interface';

const generateRandomPassword = () => {
  return Math.floor(10000000 + Math.random() * 90000000).toString();
};

const TeacherDetailsSchema = new mongoose.Schema<TeacherDetails>(
  {
    address: { type: String, required: true, default: 'not provided yet' },
    id: { type: String, required: true, unique: true, trim: true },
    bloodGroup: { type: String, required: true, default: 'not provided yet' },
    dateOfBirth: { type: String, required: true, default: 'not provided yet' },
    email: {
      type: String,
      required: true,
      unique: true,
      default: 'not provided yet',
    },
    experience: { type: String, required: false, default: 'not provided yet' },
    nidNumber: { type: Number, required: false },
    teacherImage: {
      type: String,
      default:
        'https://i.postimg.cc/8Ph6x2Kc/115-1150152-default-profile-picture-avatar-png-green.png',
    },
    gender: { type: String, required: true, default: 'not provided yet' },
    phone: { type: String, required: true, default: 'not provided yet' },
    qualification: {
      type: String,
      required: true,
      default: 'not provided yet',
    },
    residentialStatus: {
      type: String,
      required: false,
      default: 'not provided yet',
    },
    section: { type: String, required: true, default: 'not provided yet' },
    shift: { type: String, required: true, default: 'not provided yet' },
    subject: { type: String, required: true, default: 'not provided yet' },
    teacherName: { type: String, required: true, default: 'not provided yet' },
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
