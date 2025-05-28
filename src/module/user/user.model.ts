import { UserInfo } from './user.interface';
import mongoose from 'mongoose';

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
  },
  { timestamps: true },
);

const UserModel = mongoose.model<UserInfo>('User', userSchema);
export default UserModel;
