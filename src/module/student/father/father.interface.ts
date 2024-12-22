import { ObjectId } from 'mongoose';

export interface UserInformation {
  whatsapp?: string;
  bloodGroup?: string;
  deathYear?: string;
  email?: string;
  facebook?: string;
  fatherNameBn: string;
  fatherNameEn: string;
  fatherImage?: string;
  mobilenumber: string;
  monthlyIncome: string;
  nidNumber: string;
  occupation: string;
  workLocation: string;
  studentId: ObjectId;
}
