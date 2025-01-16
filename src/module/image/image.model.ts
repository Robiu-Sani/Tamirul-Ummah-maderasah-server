import mongoose from 'mongoose';
import { imageInterface } from './image.interface';

const imageSchema = new mongoose.Schema<imageInterface>(
  {
    image: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: {
      type: String,
      required: true,
      default: () => new Date().getFullYear().toString(),
    },
  },
  { timestamps: true },
);

const imageModel = mongoose.model('images', imageSchema);
export default imageModel;
