import { Schema, model, Document } from 'mongoose';
import { ISubject } from './subject.interface';

export interface ISubjectModel extends ISubject, Document {}

const subjectSchema = new Schema<ISubjectModel>(
  {
    name: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

const SubjectModel = model<ISubjectModel>('Subject', subjectSchema);

export default SubjectModel;
