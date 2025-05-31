import mongoose from 'mongoose';

export interface ISubject {
  subjectName: string;
  marks: number;
  parcentage: number;
  firstTutiralParcentage: number;
  totalParcentage: number;
  heightNumber: number;
  grade: string;
}

export interface IhealfTutorialExam {
  userId: mongoose.Types.ObjectId;
  examName: string;
  examYear: number;
  totatlMarks: number;
  parcentageTotal: number;
  parcentage: number;
  position: number;
  teacherId: mongoose.Types.ObjectId;
  isDeleted?: boolean;
  subject: ISubject[];
}
