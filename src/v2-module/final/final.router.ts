import express from 'express';
import { finalTutorialExamController } from './final.controllar';

const router = express.Router();

// Create exam
router.post('/', finalTutorialExamController.createExam);

// Get all exams
router.get('/', finalTutorialExamController.getAllExams);

// Get exams by teacher ID
router.get('/teacher/:teacherId', finalTutorialExamController.getByTeacher);

// Get exams by user ID
router.get('/user/:userId', finalTutorialExamController.getByUser);

// Get exams by exam name
router.get('/name/:examName', finalTutorialExamController.getByExamName);

// Get exams by year
router.get('/year/:year', finalTutorialExamController.getByYear);

// Get exams with failed subjects (under 33%)
router.get('/failed/:year', finalTutorialExamController.getFailedSubjects);

// Update exam
router.patch('/:id', finalTutorialExamController.updateExam);

// Soft delete
router.delete('/:id', finalTutorialExamController.deleteExam);

export const final_exam = router;
