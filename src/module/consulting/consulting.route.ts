import express from 'express';
import consultControllar from './consulting.controllar';

const router = express.Router();

router.post('/create-consulting', consultControllar.createConsult);

export const consult_router = router;
