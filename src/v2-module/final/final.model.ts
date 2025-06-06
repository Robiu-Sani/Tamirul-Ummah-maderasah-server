import { model, Schema } from 'mongoose';
import { IfinalTutorialExam, ISubject } from './final.interface';

const subjectSchema = new Schema<ISubject>(
  {
    subjectName: { type: String, required: true },
    marks: { type: Number, required: true },
    parcentage: { type: Number, required: true },
    secondTutiralParcentage: { type: Number, required: true },
    totalParcentage: { type: Number, required: true },
    helfYearlyExamTotal: { type: Number, required: true },
    total: { type: Number, required: true },
    heightNumber: { type: Number, required: true },
    grade: { type: String, required: true },
  },
  { _id: false },
);

// Final Tutorial Exam schema
const finalTutorialExamSchema = new Schema<IfinalTutorialExam>(
  {
    userId: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    examName: { type: String, required: true },
    examYear: { type: Number, required: true },
    totatlMarks: { type: Number, required: true },
    parcentage: { type: Number, required: true },
    position: { type: Number, required: true },
    parcentageTotal: { type: Number, required: true },
    finalParcentTotal: { type: Number, required: true },
    teacherId: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    isDeleted: { type: Boolean, default: false },
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
