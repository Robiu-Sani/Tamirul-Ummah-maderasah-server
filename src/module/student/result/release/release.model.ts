import mongoose from 'mongoose';
import { releaseInterface } from './release.interface';

const releaseSchema = new mongoose.Schema<releaseInterface>(
  {
    firstTutorial: {
      type: Date,
      default: () => new Date(new Date().getFullYear(), 11, 1, 12, 0, 0, 0), // Default to 1 December 12:00 AM of the current year
    },
    secondTutorial: {
      type: Date,
      default: () => new Date(new Date().getFullYear(), 11, 1, 12, 0, 0, 0),
    },
    halfYearlyExam: {
      type: Date,
      default: () => new Date(new Date().getFullYear(), 11, 1, 12, 0, 0, 0),
    },
    finalExam: {
      type: Date,
      default: () => new Date(new Date().getFullYear(), 11, 1, 12, 0, 0, 0),
    },
    modelTest: {
      type: Date,
      default: () => new Date(new Date().getFullYear(), 11, 1, 12, 0, 0, 0),
    },
    test: {
      type: Date,
      default: () => new Date(new Date().getFullYear(), 11, 1, 12, 0, 0, 0),
    },
  },
  { timestamps: true },
);

releaseSchema.pre('save', async function (next) {
  const existingData = await ReleaseModel.findOne();
  if (existingData) {
    // Replace the existing document with the new data
    await ReleaseModel.deleteMany(); // Remove all existing documents
  }
  next();
});

// Create the model from the schema
const ReleaseModel = mongoose.model('Release', releaseSchema);
export default ReleaseModel;
