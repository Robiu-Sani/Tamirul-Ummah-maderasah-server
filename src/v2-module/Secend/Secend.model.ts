import mongoose, { Schema } from 'mongoose';
import { ISecendTutorialExam } from './Secend.interface';

const SubjectSchema: Schema = new Schema({
  subjectName: { type: String, required: true },
  marks: { type: Number, required: true, default: 0 },
  parcentage: { type: Number, required: true, default: 0 },
  heightNumber: { type: Number, required: true, default: 100 },
  grade: { type: String, required: true },
});

const SecendTutorialExamSchema: Schema = new Schema<ISecendTutorialExam>(
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
      default: `Second Tutorial ${new Date().getFullYear()}`,
    },
    examYear: { type: Date, required: true, default: new Date().getFullYear() },
    totatlMarks: { type: Number, required: true },
    parcentage: { type: Number, required: true },
    position: { type: Number, required: true },
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

export const SecendTutiral = mongoose.model<ISecendTutorialExam>(
  'SecendTutorialExam',
  SecendTutorialExamSchema,
);
