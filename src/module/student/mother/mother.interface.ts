import { ObjectId } from 'mongoose';

export interface MotherInformation {
  whatsapp?: string;
  bloodGroup?: string;
  deathYear?: string;
  email?: string;
  facebook?: string;
  motherNameBn: string;
  motherNameEn: string;
  motherImage?: string;
  mobilenumber: string;
  monthlyIncome: string;
  nidNumber: string;
  occupation: string;
  workLocation: string;
  studentId: ObjectId;
}
