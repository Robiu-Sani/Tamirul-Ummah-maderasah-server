import { UserInfo } from './user.interface';
import mongoose from 'mongoose';

const generateRandomPassword = () => {
  return Math.floor(10000000 + Math.random() * 90000000).toString();
};

const userSchema = new mongoose.Schema<UserInfo>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    id: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    role: {
      type: String,
      enum: ['admin', 'teacher', 'student', 'parent'],
      required: true,
    },
    password: {
      type: String,
      required: true,
      default: generateRandomPassword,
    },
    image: {
      type: String,
      default:
        'https://i.postimg.cc/8Ph6x2Kc/115-1150152-default-profile-picture-avatar-png-green.png',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    class: {
      type: String,
      default: 'teacher',
    },
  },
  { timestamps: true },
);

const UserModel = mongoose.model<UserInfo>('User', userSchema);
export default UserModel;
