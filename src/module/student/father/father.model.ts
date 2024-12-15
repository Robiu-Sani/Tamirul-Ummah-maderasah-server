import mongoose from 'mongoose';
import { UserInformation } from './father.interface';

const fatherSchema = new mongoose.Schema<UserInformation>(
  {
    whatsapp: {
      type: String,
      default: null,
    },
    bloodGroup: {
      type: String,
      default: null,
    },
    deathYear: {
      type: String,
      default: null,
    },
    email: {
      type: String,
      default: null,
    },
    facebook: {
      type: String,
      default: null,
    },
    fatherNameBn: {
      type: String,
      required: true,
    },
    fatherNameEn: {
      type: String,
      required: true,
    },
    fatherImage: {
      type: String,
      default: null,
    },
    mobilenumber: {
      type: String,
      required: true,
    },
    monthlyIncome: {
      type: String,
      required: true,
    },
    nidNumber: {
      type: String,
      required: true,
    },
    occupation: {
      type: String,
      required: true,
    },
    workLocation: {
      type: String,
      required: true,
    },
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      unique: true,
      ref: 'Students',
    },
  },
  { timestamps: true },
);

const fatherModel = mongoose.model('father', fatherSchema);

export default fatherModel;
