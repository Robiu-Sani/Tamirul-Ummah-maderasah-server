import mongoose from 'mongoose';
import { ExamInterface } from './result.interface';

const examSchema = new mongoose.Schema<ExamInterface>(
  {
    examName: { type: String, required: true },
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Students',
      // unique: true,
    },
    teacherId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'teacher',
    },
    studentName: { type: String, required: true },
    studentClass: { type: String, required: true },
    studentGender: { type: String, required: true },
    quran: { type: Number, required: false },
    hifz: { type: Number, required: false },
    arabicFirst: { type: Number, required: false },
    arabicSecend: { type: Number, required: false },
    banglaFirst: { type: Number, required: false },
    banglaSecend: { type: Number, required: false },
    englishFirst: { type: Number, required: false },
    englishSecend: { type: Number, required: false },
    fiquah: { type: Number, required: false },
    fiquahFirst: { type: Number, required: false },
    fiquahSecend: { type: Number, required: false },
    math: { type: Number, required: false },
    science: { type: Number, required: false },
    physics: { type: Number, required: false },
    camestry: { type: Number, required: false },
    biology: { type: Number, required: false },
    balagatAndManthiq: { type: Number, required: false },
    history: { type: Number, required: false },
    heigherMath: { type: Number, required: false },
    agreculture: { type: Number, required: false },
    socialogy: { type: Number, required: false },
    pouroNithyFirst: { type: Number, required: false },
    pouroNithySecend: { type: Number, required: false },
    commomKnowladge: { type: Number, required: false },
    carrierStudy: { type: Number, required: false },
    drowing: { type: Number, required: false },
    ict: { type: Number, required: false },
    physicalEducation: { type: Number, required: false },
    piyerAndCarecter: { type: Number, required: false },
    amalAkhlakh: { type: Number, required: false },
    total: { type: Number, required: false },
  },
  {
    timestamps: true,
  },
);

const resultModel = mongoose.model('results', examSchema);

export default resultModel;
