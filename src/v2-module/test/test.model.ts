import mongoose, { Schema } from 'mongoose';
import { ItestTutorialExam } from './test.interface';

const SubjectSchema: Schema = new Schema({
  subjectName: { type: String, required: true },
  marks: { type: Number, required: true },
  parcentage: { type: Number, required: true },
  heightNumber: { type: Number, required: true, default: 100 },
  grade: { type: String, required: true },
});

const testTutorialExamSchema: Schema = new Schema<ItestTutorialExam>(
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

export const testTutiral = mongoose.model<ItestTutorialExam>(
  'testTutorialExam',
  testTutorialExamSchema,
);
