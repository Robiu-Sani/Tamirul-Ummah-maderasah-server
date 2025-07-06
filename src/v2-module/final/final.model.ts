import { model, Schema } from 'mongoose';
import { IfinalTutorialExam, ISubject } from './final.interface';

const subjectSchema = new Schema<ISubject>(
  {
    subjectName: { type: String, required: true },
    marks: { type: Number, required: true, default: 0 },
    parcentage: { type: Number, required: true, default: 0 },
    secondTutiralParcentage: { type: Number, required: true, default: 0 },
    totalParcentage: { type: Number, required: true, default: 0 },
    helfYearlyExamTotal: { type: Number, required: true, default: 0 },
    total: { type: Number, required: true, default: 0 },
    heightNumber: { type: Number, required: true, default: 100 },
    grade: { type: String, required: true },
  },
  { _id: false },
);

// Final Tutorial Exam schema
const finalTutorialExamSchema = new Schema<IfinalTutorialExam>(
  {
    userId: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    releasDate: { type: Date, required: true },
    examName: {
      type: String,
      required: true,
      default: `Final Exam ${new Date().getFullYear()}`,
    },
    examYear: { type: Date, required: true, default: new Date().getFullYear() },
    totatlMarks: { type: Number, required: true },
    parcentage: { type: Number, required: true },
    position: { type: Number, required: false },
    parcentageTotal: { type: Number, required: true },
    finalParcentTotal: { type: Number, required: true },
    teacherId: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    isDeleted: { type: Boolean, default: false },
    class: { type: String, default: 'not set' },
    subject: { type: [subjectSchema], required: true },
  },
  {
    timestamps: true,
  },
);

// Model
const FinalTutorialExamModel = model<IfinalTutorialExam>(
  'FinalExam',
  finalTutorialExamSchema,
);

export default FinalTutorialExamModel;
