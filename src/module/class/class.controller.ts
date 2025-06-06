import { Request, Response } from 'express';
import * as classService from './class.services';

export const createClass = async (req: Request, res: Response) => {
  try {
    const result = await classService.createClass(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Create failed', error });
  }
};

export const getAllClasses = async (_req: Request, res: Response) => {
  try {
    const result = await classService.getAllClasses();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Fetch failed', error });
  }
};

export const getClassById = async (req: Request, res: Response) => {
  try {
    const result = await classService.getClassById(req.params.id);
    if (!result) return res.status(404).json({ message: 'Class not found' });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Fetch failed', error });
  }
};

export const updateClass = async (req: Request, res: Response) => {
  try {
    const result = await classService.updateClass(req.params.id, req.body);
    if (!result) return res.status(404).json({ message: 'Class not found' });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Update failed', error });
  }
};

export const softDeleteClass = async (req: Request, res: Response) => {
  try {
    const result = await classService.softDeleteClass(req.params.id);
    if (!result) return res.status(404).json({ message: 'Class not found' });
    res.status(200).json({ message: 'Class soft deleted', data: result });
  } catch (error) {
    res.status(500).json({ message: 'Delete failed', error });
  }
};
