import mongoose from 'mongoose';

export interface ISubject {
  subjectName: string;
  marks: number;
  parcentage: number;
  heightNumber: number;
  grade: string;
}

export interface ISecendTutorialExam {
  userId: mongoose.Types.ObjectId;
  examName: string;
  releasDate: Date;
  examYear: Date;
  totatlMarks: number;
  parcentage: number;
  position: number;
  class: string;
  teacherId: mongoose.Types.ObjectId;
  isDeleted?: boolean;
  subject: ISubject[];
}
