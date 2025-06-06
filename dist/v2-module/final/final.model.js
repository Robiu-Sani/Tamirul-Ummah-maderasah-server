"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const subjectSchema = new mongoose_1.Schema({
    subjectName: { type: String, required: true },
    marks: { type: Number, required: true },
    parcentage: { type: Number, required: true },
    secondTutiralParcentage: { type: Number, required: true },
    totalParcentage: { type: Number, required: true },
    helfYearlyExamTotal: { type: Number, required: true },
    total: { type: Number, required: true },
    heightNumber: { type: Number, required: true },
    grade: { type: String, required: true },
}, { _id: false });
// Final Tutorial Exam schema
const finalTutorialExamSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: 'User' },
    examName: { type: String, required: true },
    examYear: { type: Number, required: true },
    totatlMarks: { type: Number, required: true },
    parcentage: { type: Number, required: true },
    position: { type: Number, required: true },
    parcentageTotal: { type: Number, required: true },
    finalParcentTotal: { type: Number, required: true },
    teacherId: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: 'User' },
    isDeleted: { type: Boolean, default: false },
    subject: { type: [subjectSchema], required: true },
}, {
    timestamps: true,
});
// Model
const FinalTutorialExamModel = (0, mongoose_1.model)('FinalExam', finalTutorialExamSchema);
exports.default = FinalTutorialExamModel;
