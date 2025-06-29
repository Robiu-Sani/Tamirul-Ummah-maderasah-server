"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteExamSubject = exports.updateExamSubject = exports.getExamSubjectByClass = exports.getAllExamSubjects = exports.createExamSubject = void 0;
const exam_subject_model_1 = __importDefault(require("./exam-subject.model"));
const createExamSubject = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield exam_subject_model_1.default.create(payload);
    return result;
});
exports.createExamSubject = createExamSubject;
const getAllExamSubjects = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield exam_subject_model_1.default.find().populate('class');
    return result;
});
exports.getAllExamSubjects = getAllExamSubjects;
const getExamSubjectByClass = (classId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield exam_subject_model_1.default.findOne({ class: classId }).populate('class');
    return result;
});
exports.getExamSubjectByClass = getExamSubjectByClass;
const updateExamSubject = (classId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield exam_subject_model_1.default.findOneAndUpdate({ class: classId }, payload, {
        new: true,
    });
    return result;
});
exports.updateExamSubject = updateExamSubject;
const deleteExamSubject = (classId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield exam_subject_model_1.default.findOneAndDelete({ class: classId });
    return result;
});
exports.deleteExamSubject = deleteExamSubject;
