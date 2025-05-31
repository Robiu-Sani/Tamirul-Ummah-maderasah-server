/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express';
import { SecendTutorialExamController } from './Secend.controllar';

const router = express.Router();
const controller = SecendTutorialExamController();

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

export const Secend_tutiral = router;
