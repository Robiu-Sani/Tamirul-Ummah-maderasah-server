import { ObjectId } from 'mongoose';

export interface ExamInterface {
  examName: string;
  studentId: ObjectId;
  teacherId: ObjectId;
  quran?: number;
  hifz?: number;
  arabicFirst?: number;
  arabicSecend?: number;
  banglaFirst?: number;
  banglaSecend?: number;
  englishFirst?: number;
  englishSecend?: number;
  fiquah?: number;
  fiquahFirst?: number;
  fiquahSecend?: number;
  math?: number;
  science?: number;
  physics?: number;
  camestry?: number;
  biology?: number;
  balagatAndManthiq?: number;
  history?: number;
  heigherMath?: number;
  agreculture?: number;
  socialogy?: number;
  pouroNithyFirst?: number;
  pouroNithySecend?: number;
  commomKnowladge?: number;
  carrierStudy?: number;
  drowing?: number;
  ict?: number;
  physicalEducation?: number;
  piyerAndCarecter?: number;
  total?: number;
}
