import mongoose from 'mongoose';

export interface ISubject {
  subjectName: string;
  marks: number;
  parcentage: number;
  secondTutiralParcentage: number;
  totalParcentage: number;
  helfYearlyExamTotal: number;
  total: number;
  heightNumber: number;
  grade: string;
}

export interface IfinalTutorialExam {
  userId: mongoose.Types.ObjectId;
  examName: string;
  releasDate: Date;
  examYear: Date;
  totatlMarks: number;
  parcentage: number;
  position: number;
  parcentageTotal: number;
  finalParcentTotal: number;
  teacherId: mongoose.Types.ObjectId;
  isDeleted?: boolean;
  subject: ISubject[];
}
