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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteExamSubject = exports.updateExamSubject = exports.getExamSubjectByClass = exports.getAllExamSubjects = exports.createExamSubject = void 0;
const ExamSubjectService = __importStar(require("./exam-subject.service"));
// Create
const createExamSubject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const result = yield ExamSubjectService.createExamSubject(data);
    res.status(201).json({ success: true, data: result });
});
exports.createExamSubject = createExamSubject;
// Get All
const getAllExamSubjects = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield ExamSubjectService.getAllExamSubjects();
    res.status(200).json({ success: true, data: result });
});
exports.getAllExamSubjects = getAllExamSubjects;
// Get Single by Class
const getExamSubjectByClass = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { classId } = req.params;
    const result = yield ExamSubjectService.getExamSubjectByClass(classId);
    res.status(200).json({ success: true, data: result });
});
exports.getExamSubjectByClass = getExamSubjectByClass;
// Update by Class
const updateExamSubject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { classId } = req.params;
    const payload = req.body;
    const result = yield ExamSubjectService.updateExamSubject(classId, payload);
    res.status(200).json({ success: true, data: result });
});
exports.updateExamSubject = updateExamSubject;
// Delete by Class
const deleteExamSubject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { classId } = req.params;
    const result = yield ExamSubjectService.deleteExamSubject(classId);
    res.status(200).json({ success: true, data: result });
});
exports.deleteExamSubject = deleteExamSubject;
