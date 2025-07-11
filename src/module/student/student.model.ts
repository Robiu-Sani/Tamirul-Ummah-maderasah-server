import mongoose from 'mongoose';
import { StudentInfo } from './student.interface';

const generateRandomPassword = () => {
  return Math.floor(10000000 + Math.random() * 90000000).toString();
};

const studentSchema = new mongoose.Schema<StudentInfo>(
  {
    address: {
      type: String,
      trim: true,
      default: 'not provided yet',
    },
    id: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    birthCertificate: {
      type: String,
      trim: true,
      default: 'not provided yet',
    },
    bloodGroup: {
      type: String,
      trim: true,
      default: 'not provided yet',
    },
    class: {
      type: String,
      trim: true,
      default: 'not provided yet',
    },
    dateOfBirth: {
      type: String,
      trim: true,
      default: 'not provided yet',
    },
    email: {
      type: String,
      trim: true,
      default: 'not provided yet',
    },
    fathersName: {
      type: String,
      trim: true,
      default: 'not provided yet',
    },
    gender: {
      type: String,
      trim: true,
      default: 'not provided yet',
    },
    height: {
      type: String,
      trim: true,
      default: 'not provided yet',
    },
    // identityEmail: {
    //   type: String,
    //   trim: true,
    // },
    identityMark: {
      type: String,
      trim: true,
      default: 'not provided yet',
    },

    image: {
      type: String,
      default:
        'https://i.postimg.cc/8Ph6x2Kc/115-1150152-default-profile-picture-avatar-png-green.png',
    },
    mothersName: {
      type: String,
      trim: true,
      default: 'not provided yet',
    },
    residentialStatus: {
      type: String,
      trim: true,
      default: 'not provided yet',
    },
    section: {
      type: String,
      trim: true,
      default: 'not provided yet',
    },
    studentNameBangla: {
      type: String,
      trim: true,
      default: 'not provided yet',
    },
    studentNameEnglish: {
      type: String,
      trim: true,
      default: 'not provided yet',
    },
    classRoll: { type: Number, required: false, default: 0 },
    weight: {
      type: String,
      trim: true,
      default: 'not provided yet',
    },
    password: {
      type: mongoose.Schema.Types.Mixed,
      trim: true,
      default: generateRandomPassword,
    },

    isRunning: { type: Boolean, required: true, default: true },
    monthlyFee: { type: Number, required: true, default: 750 },
    type: {
      type: String,
      default: 'student',
    },
    studentId: {
      type: String,
      trim: true,
      unique: true,
      default: 'not provided yet',
    },
  },
  {
    timestamps: true,
  },
);

const StudentModel = mongoose.model('Students', studentSchema);

export default StudentModel;
