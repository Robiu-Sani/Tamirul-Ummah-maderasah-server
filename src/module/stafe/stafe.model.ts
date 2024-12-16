import mongoose from 'mongoose';
import { StafeDetails } from './stafe.interface';

const generateRandomPassword = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

const StafeSchema = new mongoose.Schema<StafeDetails>(
  {
    address: { type: String, required: true },
    bloodGroup: { type: String, required: true },
    dateOfBirth: { type: String, required: true },
    department: { type: String, required: true },
    designation: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    gender: { type: String, required: true },
    joiningDate: { type: String, required: true },
    phone: { type: String, required: true },
    residentialStatus: { type: String, required: true },
    staffName: { type: String, required: true },
    stafePassword: {
      type: String,
      required: true,
      default: generateRandomPassword,
    },
  },
  {
    timestamps: true,
  },
);

const StafeModel = mongoose.model('stafe', StafeSchema);
export default StafeModel;
