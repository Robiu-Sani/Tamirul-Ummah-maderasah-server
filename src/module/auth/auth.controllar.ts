/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import authDB from './auth.services';

const authStudentControllar = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const data = await authDB.studentAuth(payload);
    res.json({
      status: true,
      message: 'Login Successful',
      data,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    // Extract the error message to send to the frontend
    res.json({
      status: false,
      message: 'Login is not Successful',
      error: error.message || 'An error occurred',
    });
  }
};

const authTeacherControllar = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const data = await authDB.teacherAuth(payload);

    res.json({
      status: true,
      message: 'Login Successful',
      data,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    // Extract the error message to send to the frontend
    res.json({
      status: false,
      message: 'Login is not Successful',
      error: error.message || 'An error occurred',
    });
  }
};

const userAuthControllar = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const data = await authDB.userAuth(payload);
    res.json({
      status: true,
      message: 'Login Successful',
      data,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    // Extract the error message to send to the frontend
    res.json({
      status: false,
      message: 'Login is not Successful',
      error: error.message || 'An error occurred',
    });
  }
};

const authControllar = {
  authStudentControllar,
  authTeacherControllar,
  userAuthControllar,
};
export default authControllar;
