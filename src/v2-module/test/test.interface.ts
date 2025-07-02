import mongoose from 'mongoose';

export interface ISubject {
  subjectName: string;
  marks: number;
  heightNumber: number;
  grade: string;
}

export interface ItestTutorialExam {
  userId: mongoose.Types.ObjectId;
  examName: string;
  examYear: Date;
  releasDate: Date;
  totatlMarks: number;
  parcentage: number;
  position: number;
  teacherId: mongoose.Types.ObjectId;
  isDeleted?: boolean;
  subject: ISubject[];
}
