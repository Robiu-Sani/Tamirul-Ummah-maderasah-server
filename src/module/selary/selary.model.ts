import mongoose from 'mongoose';
import { selaryInterface } from './selary.interface';

const selarySchema = new mongoose.Schema<selaryInterface>({
  teacherId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'teacher',
    required: true,
  }, // Refers to Teacher model
  amount: { type: Number, required: true },
  month: { type: String, required: true },
  year: { type: Number, required: true }, // Allows string or number
  isSuccess: { type: Boolean, default: false },
});

const SelaryModel = mongoose.model('selary', selarySchema);
export default SelaryModel;
