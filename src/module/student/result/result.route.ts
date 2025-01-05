import express from 'express';
import { resultControllar } from './result.controllar';

const router = express.Router();

router.post('/create-exam-result', resultControllar.createResult);
router.get('/table', resultControllar.getTableResult);
router.get('/', resultControllar.getAllResult);
router.get('/get-single-result/:id', resultControllar.getSingleResult);
router.get('/get-result-by-teacher-id/:id', resultControllar.getByTeacherId);
router.delete('/delete-single-result/:id', resultControllar.deleteResult);

export const result_router = router;
