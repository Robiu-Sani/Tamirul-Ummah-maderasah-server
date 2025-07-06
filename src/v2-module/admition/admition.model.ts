import mongoose, { Schema } from 'mongoose';
import { IadmitionTutorialExam } from './admition.interface';

const SubjectSchema: Schema = new Schema({
  subjectName: { type: String, required: true },
  marks: { type: Number, required: true, default: 0 },
  heightNumber: { type: Number, required: true, default: 100 },
  grade: { type: String, required: true },
});

const admitionTutorialExamSchema: Schema = new Schema<IadmitionTutorialExam>(
  {
    userId: { type: String, required: true },
    name: { type: String, required: true },
    examName: {
      type: String,
      required: true,
      default: `Admission Test ${new Date().getFullYear()}`,
    },
    releasDate: { type: Date, required: true },
    examYear: { type: Date, required: true, default: new Date().getFullYear() },
    totatlMarks: { type: Number, required: true },
    class: { type: String, default: 'not set' },
    parcentage: { type: Number, required: true },
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

export const admitionTutiral = mongoose.model<IadmitionTutorialExam>(
  'admitionTutorialExam',
  admitionTutorialExamSchema,
);
