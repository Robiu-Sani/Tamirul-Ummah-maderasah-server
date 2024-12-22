import mongoose from 'mongoose';
import { aboutInterface } from './about.interface';

const aboutSchema = new mongoose.Schema<aboutInterface>(
  {
    speaker: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);
const AboutModel = mongoose.model('explayining', aboutSchema);
export default AboutModel;
