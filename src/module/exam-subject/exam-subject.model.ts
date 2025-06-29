import mongoose, { Schema } from 'mongoose';
import { IExamSubject } from './exam-subject.interface';

// Schema
const ExamSubjectSchema: Schema = new Schema<IExamSubject>({
  class: {
    type: Schema.Types.ObjectId,
    ref: 'Class',
    required: true,
    unique: true,
  },
  subject: [
    {
      banglaName: { type: String, required: true },
      englishName: { type: String, required: true },
    },
  ],
});

// Model
const ExamSubject = mongoose.model<IExamSubject>(
  'ExamSubject',
  ExamSubjectSchema,
);

export default ExamSubject;
