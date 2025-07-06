"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecendTutiral = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const SubjectSchema = new mongoose_1.Schema({
    subjectName: { type: String, required: true },
    marks: { type: Number, required: true, default: 0 },
    parcentage: { type: Number, required: true, default: 0 },
    heightNumber: { type: Number, required: true, default: 100 },
    grade: { type: String, required: true },
});
const SecendTutorialExamSchema = new mongoose_1.Schema({
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Students',
        required: true,
    },
    releasDate: { type: Date, required: true },
    examName: {
        type: String,
        required: true,
        default: `Second Tutorial ${new Date().getFullYear()}`,
    },
    examYear: { type: Date, required: true, default: new Date().getFullYear() },
    totatlMarks: { type: Number, required: true },
    parcentage: { type: Number, required: true },
    position: { type: Number, required: false },
    class: { type: String, default: 'not set' },
    teacherId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'teacher',
        required: true,
    },
    isDeleted: { type: Boolean, default: false },
    subject: [SubjectSchema],
}, { timestamps: true });
exports.SecendTutiral = mongoose_1.default.model('SecendTutorialExam', SecendTutorialExamSchema);
