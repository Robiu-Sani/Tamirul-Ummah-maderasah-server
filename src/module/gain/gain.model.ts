import mongoose from 'mongoose';
import { gainInterface } from './gain.interface';

const gainSchema = new mongoose.Schema<gainInterface>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: false },
  },
  { timestamps: true },
);

const gainModel = mongoose.model('our-gain', gainSchema);
export default gainModel;
