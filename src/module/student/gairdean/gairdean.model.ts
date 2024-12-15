import mongoose from 'mongoose';
import { GairdeanInformation } from './gairdean.interface';

const gairdeanSchema = new mongoose.Schema<GairdeanInformation>(
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
    gairdeanNameBn: {
      type: String,
      required: true,
    },
    gairdeanNameEn: {
      type: String,
      required: true,
    },
    gairdeanImage: {
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

const GairdeanModel = mongoose.model('gairdean', gairdeanSchema);

export default GairdeanModel;
