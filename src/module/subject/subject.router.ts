/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express';
import * as subjectController from './subject.controller';

const router = express.Router();

router.post('/', subjectController.createSubject);
router.get('/', subjectController.getAllSubjects);
router.get('/:id', subjectController.getSubjectById as any);
router.put('/:id', subjectController.updateSubject as any);
router.delete('/:id', subjectController.softDeleteSubject as any); // Soft delete

export const subject_router = router;
