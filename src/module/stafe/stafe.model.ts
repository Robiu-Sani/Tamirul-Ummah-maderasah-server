import mongoose from 'mongoose';
import { StafeDetails } from './stafe.interface';

const generateRandomPassword = () => {
  return Math.floor(10000000 + Math.random() * 90000000).toString();
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
    nidNumber: { type: Number, required: true },
    staffImage: {
      type: String,
      default:
        'https://i.postimg.cc/8Ph6x2Kc/115-1150152-default-profile-picture-avatar-png-green.png',
    },
    stafePassword: {
      type: mongoose.Schema.Types.Mixed,
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
