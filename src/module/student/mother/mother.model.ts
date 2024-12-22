import mongoose from 'mongoose';
import { MotherInformation } from './mother.interface';

const motherSchema = new mongoose.Schema<MotherInformation>(
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
    motherNameBn: {
      type: String,
      required: true,
    },
    motherNameEn: {
      type: String,
      required: true,
    },
    motherImage: {
      type: String,
      default:
        'https://i.postimg.cc/8Ph6x2Kc/115-1150152-default-profile-picture-avatar-png-green.png',
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

const MotherModel = mongoose.model('mother', motherSchema);

export default MotherModel;
