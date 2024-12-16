import mongoose from 'mongoose';
import { FeeDetails } from './fee.interface';

const feeSchema = new mongoose.Schema<FeeDetails>(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Students',
    },
    fixedAmount: { type: mongoose.Schema.Types.Mixed, required: true },
    totalAmount: { type: mongoose.Schema.Types.Mixed, required: true },
    feeName: { type: String, required: true },
    monthAndYear: { type: String, required: true },
  },
  { timestamps: true },
);

const FeeModel = mongoose.model('fee', feeSchema);
export default FeeModel;
