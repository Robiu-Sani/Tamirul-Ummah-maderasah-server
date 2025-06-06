import { Request, Response } from 'express';
import * as subjectService from './subject.services';

export const createSubject = async (req: Request, res: Response) => {
  try {
    const result = await subjectService.createSubject(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create subject', error });
  }
};

export const getAllSubjects = async (_req: Request, res: Response) => {
  try {
    const result = await subjectService.getAllSubjects();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch subjects', error });
  }
};

export const getSubjectById = async (req: Request, res: Response) => {
  try {
    const result = await subjectService.getSubjectById(req.params.id);
    if (!result) return res.status(404).json({ message: 'Subject not found' });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch subject', error });
  }
};

export const updateSubject = async (req: Request, res: Response) => {
  try {
    const result = await subjectService.updateSubject(req.params.id, req.body);
    if (!result) return res.status(404).json({ message: 'Subject not found' });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update subject', error });
  }
};

export const softDeleteSubject = async (req: Request, res: Response) => {
  try {
    const result = await subjectService.softDeleteSubject(req.params.id);
    if (!result) return res.status(404).json({ message: 'Subject not found' });
    res.status(200).json({ message: 'Subject soft deleted', data: result });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete subject', error });
  }
};
