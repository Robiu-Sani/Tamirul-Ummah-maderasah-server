import mongoose, { Schema } from 'mongoose';
import { IFirstTutorialExam } from './firstTu.inerface';

const SubjectSchema: Schema = new Schema({
  subjectName: { type: String, required: true },
  marks: { type: Number, required: true, default: 0 },
  parcentage: { type: Number, required: true, default: 0 },
  heightNumber: { type: Number, required: true, default: 100 },
  grade: { type: String, required: true },
});

const FirstTutorialExamSchema: Schema = new Schema<IFirstTutorialExam>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'Students',
      required: true,
    },
    releasDate: { type: Date, required: true },
    examName: {
      type: String,
      required: true,
      default: `First Tutorial ${new Date().getFullYear()}`,
    },
    examYear: { type: Date, required: true, default: new Date().getFullYear() },
    totatlMarks: { type: Number, required: true },
    parcentage: { type: Number, required: true },
    position: { type: Number, required: false },
    teacherId: {
      type: Schema.Types.ObjectId,
      ref: 'teacher',
      required: true,
    },
    class: { type: String, default: 'not set' },
    isDeleted: { type: Boolean, default: false },
    subject: [SubjectSchema],
  },
  { timestamps: true },
);

export const FirstTutiral = mongoose.model<IFirstTutorialExam>(
  'FirstTutorialExam',
  FirstTutorialExamSchema,
);
