/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express';
import { healfTutorialExamController } from './Healf.controller';

const router = express.Router();
const controller = healfTutorialExamController();

// Exam routes
router.post('/', controller.createExam);
router.get('/', controller.getAllExams);
router.get('/teacher/:teacherId', controller.getExamsByTeacher); // Fixed method name
router.get('/user/:userId', controller.getExamsByUser);
router.get('/name/:examName', controller.getExamsByName);
router.get('/year/:year', controller.getExamsByYear);
router.get('/failed/:year', controller.getExamsWithFailedSubjects);
router.patch('/:id', controller.updateExam as any);
router.delete('/:id', controller.deleteExam as any);

export const healf_year_exam = router;
