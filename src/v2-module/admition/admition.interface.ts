import mongoose from 'mongoose';

export interface ISubject {
  subjectName: string;
  marks: number;
  heightNumber: number;
  grade: string;
}

export interface IadmitionTutorialExam {
  userId: string;
  name: string;
  examName: string;
  releasDate: Date;
  examYear: Date;
  class: string;
  totatlMarks: number;
  parcentage: number;
  position: number;
  teacherId: mongoose.Types.ObjectId;
  isDeleted?: boolean;
  subject: ISubject[];
}
