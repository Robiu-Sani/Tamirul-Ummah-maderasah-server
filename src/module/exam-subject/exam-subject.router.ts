import express from 'express';
import * as ExamSubjectController from './exam-subject.controller';

const router = express.Router();

router.post('/', ExamSubjectController.createExamSubject);
router.get('/', ExamSubjectController.getAllExamSubjects);
router.get('/:classId', ExamSubjectController.getExamSubjectByClass);
router.patch('/:classId', ExamSubjectController.updateExamSubject);
router.delete('/:classId', ExamSubjectController.deleteExamSubject);

export const exam_subject = router;
