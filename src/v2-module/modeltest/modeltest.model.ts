import mongoose, { Schema } from 'mongoose';
import { ImodeltestTutorialExam } from './modeltest.interface';

const SubjectSchema: Schema = new Schema({
  subjectName: { type: String, required: true, default: 0 },
  marks: { type: Number, required: true, default: 0 },
  heightNumber: { type: Number, required: true, default: 100 },
  grade: { type: String, required: true },
});

const modeltestTutorialExamSchema: Schema = new Schema<ImodeltestTutorialExam>(
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
      default: `Model Test ${new Date().getFullYear()}`,
    },
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

export const modeltestTutiral = mongoose.model<ImodeltestTutorialExam>(
  'modeltestTutorialExam',
  modeltestTutorialExamSchema,
);
