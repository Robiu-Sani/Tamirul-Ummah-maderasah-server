"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const examSchema = new mongoose_1.default.Schema({
    examName: { type: String, required: true },
    studentId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
        ref: 'Students',
        unique: true,
    },
    teacherId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
        ref: 'teacher',
    },
    quran: { type: Number, default: null },
    hifz: { type: Number, default: null },
    arabicFirst: { type: Number, default: null },
    arabicSecend: { type: Number, default: null },
    banglaFirst: { type: Number, default: null },
    banglaSecend: { type: Number, default: null },
    englishFirst: { type: Number, default: null },
    englishSecend: { type: Number, default: null },
    fiquah: { type: Number, default: null },
    fiquahFirst: { type: Number, default: null },
    fiquahSecend: { type: Number, default: null },
    math: { type: Number, default: null },
    science: { type: Number, default: null },
    physics: { type: Number, default: null },
    camestry: { type: Number, default: null },
    biology: { type: Number, default: null },
    balagatAndManthiq: { type: Number, default: null },
    history: { type: Number, default: null },
    heigherMath: { type: Number, default: null },
    agreculture: { type: Number, default: null },
    socialogy: { type: Number, default: null },
    pouroNithyFirst: { type: Number, default: null },
    pouroNithySecend: { type: Number, default: null },
    commomKnowladge: { type: Number, default: null },
    carrierStudy: { type: Number, default: null },
    drowing: { type: Number, default: null },
    ict: { type: Number, default: null },
    physicalEducation: { type: Number, default: null },
    piyerAndCarecter: { type: Number, default: null },
    total: { type: Number, default: null },
}, {
    timestamps: true,
});
exports.default = examSchema;
