import express from 'express';
import consultControllar from './consulting.controllar';

const router = express.Router();

router.post('/create-consulting', consultControllar.createConsult);
router.get('/', consultControllar.getConsult);
router.delete('/delete', consultControllar.deleteConsult);

export const consult_router = router;
