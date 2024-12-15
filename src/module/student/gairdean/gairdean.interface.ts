import { ObjectId } from 'mongoose';

export interface GairdeanInformation {
  whatsapp?: string;
  bloodGroup?: string;
  deathYear?: string;
  email?: string;
  facebook?: string;
  gairdeanNameBn: string;
  gairdeanNameEn: string;
  gairdeanImage?: string | null;
  mobilenumber: string;
  monthlyIncome: string;
  nidNumber: string;
  occupation: string;
  workLocation: string;
  studentId: ObjectId;
}
