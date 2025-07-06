import mongoose from 'mongoose';

export interface ISubject {
  subjectName: string;
  marks: number;
  heightNumber: number;
  grade: string;
}

export interface ImodeltestTutorialExam {
  userId: mongoose.Types.ObjectId;
  examName: string;
  examYear: Date;
  releasDate: Date;
  totatlMarks: number;
  class: string;
  parcentage: number;
  position: number;
  teacherId: mongoose.Types.ObjectId;
  isDeleted?: boolean;
  subject: ISubject[];
}
