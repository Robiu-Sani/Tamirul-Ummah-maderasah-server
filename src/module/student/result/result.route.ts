import express from 'express';
import { resultControllar } from './result.controllar';

const router = express.Router();

router.post('/create-exam-result', resultControllar.createResult);
router.get('/table', resultControllar.getTableResult);
router.get('/', resultControllar.getAllResult);

export const result_router = router;
