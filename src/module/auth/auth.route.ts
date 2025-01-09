import express from 'express';
import authControllar from './auth.controllar';

const router = express.Router();

router.post('/student', authControllar.authStudentControllar);

export const auth_route = router;
