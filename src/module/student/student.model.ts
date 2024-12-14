import mongoose from 'mongoose';
import { StudentInfo } from './student.interface';

const studentSchema = new mongoose.Schema<StudentInfo>(
  {
    address: {
      type: String,
      trim: true,
    },
    birthCertificate: {
      type: String,
      trim: true,
    },
    bloodGroup: {
      type: String,
      trim: true,
    },
    class: {
      type: String,
      trim: true,
    },
    dateOfBirth: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    fathersName: {
      type: String,
      trim: true,
    },
    gender: {
      type: String,
      trim: true,
    },
    height: {
      type: String,
      trim: true,
    },
    identityEmail: {
      type: String,
      trim: true,
    },
    identityMark: {
      type: String,
      trim: true,
    },
    image: {
      type: String,
      default: null,
    },
    mothersName: {
      type: String,
      trim: true,
    },
    residentialStatus: {
      type: String,
      trim: true,
    },
    section: {
      type: String,
      trim: true,
    },
    studentNameBangla: {
      type: String,
      trim: true,
    },
    studentNameEnglish: {
      type: String,
      trim: true,
    },
    weight: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

const StudentModel = mongoose.model('Students', studentSchema);

export default StudentModel;
