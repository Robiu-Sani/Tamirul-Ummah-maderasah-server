import mongoose, { Schema } from 'mongoose';
import { IFirstTutorialExam } from './firstTu.inerface';

const SubjectSchema: Schema = new Schema({
  subjectName: { type: String, required: true },
  marks: { type: Number, required: true },
  parcentage: { type: Number, required: true },
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
    examName: { type: String, required: true },
    examYear: { type: Number, required: true },
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

export const FirstTutiral = mongoose.model<IFirstTutorialExam>(
  'FirstTutorialExam',
  FirstTutorialExamSchema,
);
