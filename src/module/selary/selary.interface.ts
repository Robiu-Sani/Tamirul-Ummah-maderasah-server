import { ObjectId } from 'mongoose';

export interface selaryInterface {
  teacherId: ObjectId;
  amount: number;
  month: string;
  year: string | number;
  isSuccess: boolean;
}
