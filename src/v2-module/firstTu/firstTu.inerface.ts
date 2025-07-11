import mongoose from 'mongoose';

export interface ISubject {
  subjectName: string;
  marks: number;
  parcentage: number;
  heightNumber: number;
  grade: string;
}

export interface IFirstTutorialExam {
  userId: mongoose.Types.ObjectId; //
  examName: string; //
  releasDate: Date; //
  examYear: Date; //
  totatlMarks: number;
  parcentage: number;
  position: number;
  teacherId: mongoose.Types.ObjectId; //
  isDeleted?: boolean; //
  class: string; //
  subject: ISubject[];
}
