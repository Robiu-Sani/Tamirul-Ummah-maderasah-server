import mongoose from 'mongoose';
import { AboutInterface } from './about.interface';

const aboutSchema = new mongoose.Schema<AboutInterface>(
  {
    speaker: { type: String, required: true }, // Required string field
    title: { type: String, required: true }, // Required string field
    type: { type: String, required: true }, // Required string field
    description: { type: String, required: true }, // Required string field
    aboutImage: { type: String, required: false }, // Optional string field
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields automatically
  },
);

// Create the model
const AboutModel = mongoose.model<AboutInterface>('About-text', aboutSchema);

export default AboutModel;
