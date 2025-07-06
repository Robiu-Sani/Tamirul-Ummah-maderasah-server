import mongoose, { Schema } from 'mongoose';
import { IhealfTutorialExam } from './Healf.interface';

const SubjectSchema: Schema = new Schema({
  subjectName: { type: String, required: true },
  marks: { type: Number, required: true, default: 0 },
  parcentage: { type: Number, required: true, default: 0 },
  firstTutiralParcentage: { type: Number, required: true, default: 0 },
  totalParcentage: { type: Number, required: true, default: 0 },
  heightNumber: { type: Number, required: true, default: 100 },
  grade: { type: String, required: true },
});

const healfTutorialExamSchema: Schema = new Schema<IhealfTutorialExam>(
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
      default: `Half Yearly Exam ${new Date().getFullYear()}`,
    },
    examYear: { type: Date, required: true, default: new Date().getFullYear() },
    totatlMarks: { type: Number, required: true },
    parcentage: { type: Number, required: true },
    parcentageTotal: { type: Number, required: true },
    class: { type: String, default: 'not set' },
    position: { type: Number, required: false },
    teacherId: {
      type: Schema.Types.ObjectId,
      ref: 'teacher',
      required: true,
    },
    isDeleted: { type: Boolean, default: false },
    subject: [SubjectSchema],
  },
  { timestamps: true },
);

export const healfTutiral = mongoose.model<IhealfTutorialExam>(
  'healfTutorialExam',
  healfTutorialExamSchema,
);
