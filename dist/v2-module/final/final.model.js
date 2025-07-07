"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const subjectSchema = new mongoose_1.Schema({
    subjectName: { type: String, required: true },
    marks: { type: Number, required: true, default: 0 },
    parcentage: { type: Number, required: true, default: 0 },
    heightNumber: { type: Number, required: true, default: 100 },
    grade: { type: String, required: true },
}, { _id: false });
// Final Tutorial Exam schema
const finalTutorialExamSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: 'User' },
    releasDate: { type: Date, required: true },
    examName: {
        type: String,
        required: true,
        default: `Final Exam ${new Date().getFullYear()}`,
    },
    examYear: { type: Date, required: true, default: new Date().getFullYear() },
    totatlMarks: { type: Number, required: true },
    parcentage: { type: Number, required: true },
    position: { type: Number, required: false },
    parcentageTotal: { type: Number, required: false, default: 0 },
    finalParcentTotal: { type: Number, required: false, default: 0 },
    teacherId: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: 'teacher' },
    isDeleted: { type: Boolean, default: false },
    class: { type: String, default: 'not set' },
    subject: { type: [subjectSchema], required: true },
}, {
    timestamps: true,
});
// Model
const FinalTutorialExamModel = (0, mongoose_1.model)('FinalExam', finalTutorialExamSchema);
exports.default = FinalTutorialExamModel;
