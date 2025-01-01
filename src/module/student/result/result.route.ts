import express from 'express';
import { resultControllar } from './result.controllar';

const router = express.Router();

router.post('/create-exam-result', resultControllar.createResult);

export const result_router = router;