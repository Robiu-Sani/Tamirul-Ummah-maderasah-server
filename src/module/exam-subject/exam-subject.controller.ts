import { Request, Response } from 'express';
import * as ExamSubjectService from './exam-subject.service';

// Create
export const createExamSubject = async (req: Request, res: Response) => {
  const data = req.body;
  const result = await ExamSubjectService.createExamSubject(data);
  res.status(201).json({ success: true, data: result });
};

// Get All
export const getAllExamSubjects = async (_req: Request, res: Response) => {
  const result = await ExamSubjectService.getAllExamSubjects();
  res.status(200).json({ success: true, data: result });
};

// Get Single by Class
export const getExamSubjectByClass = async (req: Request, res: Response) => {
  const { classId } = req.params;
  const result = await ExamSubjectService.getExamSubjectByClass(classId);
  res.status(200).json({ success: true, data: result });
};

// Update by Class
export const updateExamSubject = async (req: Request, res: Response) => {
  const { classId } = req.params;
  const payload = req.body;
  const result = await ExamSubjectService.updateExamSubject(classId, payload);
  res.status(200).json({ success: true, data: result });
};

// Delete by Class
export const deleteExamSubject = async (req: Request, res: Response) => {
  const { classId } = req.params;
  const result = await ExamSubjectService.deleteExamSubject(classId);
  res.status(200).json({ success: true, data: result });
};
