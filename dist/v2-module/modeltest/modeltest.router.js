"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.modeltest = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const express_1 = __importDefault(require("express"));
const modeltest_controller_1 = require("./modeltest.controller");
const router = express_1.default.Router();
const controller = (0, modeltest_controller_1.modeltestTutorialExamController)();
// Exam routes
router.post('/', controller.createExam);
router.get('/', controller.getAllExams);
router.get('/teacher/:teacherId', controller.getExamsByTeacher); // Fixed method name
router.get('/user/:userId', controller.getExamsByUser);
router.get('/name/:examName', controller.getExamsByName);
router.get('/year/:year', controller.getExamsByYear);
router.get('/failed/:year', controller.getExamsWithFailedSubjects);
router.patch('/:id', controller.updateExam);
router.delete('/:id', controller.deleteExam);
exports.modeltest = router;
