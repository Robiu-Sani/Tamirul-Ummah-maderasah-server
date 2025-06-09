import express from 'express';
import authControllar from './auth.controllar';

const router = express.Router();

router.post('/student', authControllar.authStudentControllar);
router.post('/teacher', authControllar.authTeacherControllar);
router.post('/user', authControllar.userAuthControllar);

export const auth_route = router;
