import mongoose from 'mongoose';
import { userInterface } from './user.interface';

const userSchema = new mongoose.Schema<userInterface>({
  userId: { type: mongoose.Schema.Types.Mixed, required: true },
  email: { type: String, required: true },
  password: { type: mongoose.Schema.Types.Mixed, required: true },
});

const userModel = mongoose.model<userInterface>('user', userSchema);
export default userModel;
