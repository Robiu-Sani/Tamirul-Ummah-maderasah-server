import mongoose from 'mongoose';

export interface ISubject {
  subjectName: string;
  marks: number;
  parcentage: number;
  heightNumber: number;
  grade: string;
}

export interface IhealfTutorialExam {
  userId: mongoose.Types.ObjectId;
  examName: string;
  examYear: Date;
  releasDate: Date;
  totatlMarks: number;
  parcentageTotal: number;
  parcentage: number;
  position: number;
  class: string;
  teacherId: mongoose.Types.ObjectId;
  isDeleted?: boolean;
  subject: ISubject[];
}
