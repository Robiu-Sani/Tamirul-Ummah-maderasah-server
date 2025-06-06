"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.final_exam = void 0;
const express_1 = __importDefault(require("express"));
const final_controllar_1 = require("./final.controllar");
const router = express_1.default.Router();
// Create exam
router.post('/', final_controllar_1.finalTutorialExamController.createExam);
// Get all exams
router.get('/', final_controllar_1.finalTutorialExamController.getAllExams);
// Get exams by teacher ID
router.get('/teacher/:teacherId', final_controllar_1.finalTutorialExamController.getByTeacher);
// Get exams by user ID
router.get('/user/:userId', final_controllar_1.finalTutorialExamController.getByUser);
// Get exams by exam name
router.get('/name/:examName', final_controllar_1.finalTutorialExamController.getByExamName);
// Get exams by year
router.get('/year/:year', final_controllar_1.finalTutorialExamController.getByYear);
// Get exams with failed subjects (under 33%)
router.get('/failed/:year', final_controllar_1.finalTutorialExamController.getFailedSubjects);
// Update exam
router.patch('/:id', final_controllar_1.finalTutorialExamController.updateExam);
// Soft delete
router.delete('/:id', final_controllar_1.finalTutorialExamController.deleteExam);
exports.final_exam = router;
