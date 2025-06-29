import { ObjectId } from 'mongoose';

export interface IExamSubject {
  class: ObjectId;
  subject: [{ banglaName: string; englishName: string }];
}
