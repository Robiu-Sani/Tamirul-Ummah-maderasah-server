import { ObjectId } from 'mongoose';

export interface FeeDetails {
  studentId: ObjectId;
  fixedAmount: string | number;
  totalAmount: string | number;
  feeName: string;
  monthAndYear: string;
}
