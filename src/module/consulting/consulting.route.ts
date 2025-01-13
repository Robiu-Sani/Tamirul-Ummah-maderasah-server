import express from 'express';
import consultControllar from './consulting.controllar';

const router = express.Router();

router.post('/create-consulting', consultControllar.createConsult);
router.get('/', consultControllar.getConsult);
router.get('/cetagory/:cetagory', consultControllar.getbycategory);
router.delete('/delete/:id', consultControllar.deleteConsult);

export const consult_router = router;
