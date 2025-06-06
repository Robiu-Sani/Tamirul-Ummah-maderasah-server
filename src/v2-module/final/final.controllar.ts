/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { healfTutorialExamService } from './final.services';

export const finalTutorialExamController = {
  // Create
  async createExam(req: Request, res: Response) {
    try {
      const result = await healfTutorialExamService.createExam(req.body);
      res.status(201).json({ success: true, data: result });
    } catch (err) {
      res
        .status(500)
        .json({ success: false, message: 'Failed to create exam', error: err });
    }
  },

  // Get All
  async getAllExams(req: Request, res: Response) {
    try {
      const filters = req.query;
      const result = await healfTutorialExamService.getAllExams(
        filters as any,
        filters as any,
      );
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      res
        .status(500)
        .json({ success: false, message: 'Failed to get exams', error: err });
    }
  },

  // Get by teacher ID
  async getByTeacher(req: Request, res: Response) {
    try {
      const { teacherId } = req.params;
      const result = await healfTutorialExamService.getExamsByTeacher(
        teacherId,
        req.query as any,
      );
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      res
        .status(500)
        .json({
          success: false,
          message: 'Failed to get exams by teacher',
          error: err,
        });
    }
  },

  // Get by user ID
  async getByUser(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      const result = await healfTutorialExamService.getExamsByUser(
        userId,
        req.query as any,
      );
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      res
        .status(500)
        .json({
          success: false,
          message: 'Failed to get exams by user',
          error: err,
        });
    }
  },

  // Get by name
  async getByExamName(req: Request, res: Response) {
    try {
      const { examName } = req.params;
      const result = await healfTutorialExamService.getExamsByName(
        examName,
        req.query as any,
      );
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      res
        .status(500)
        .json({
          success: false,
          message: 'Failed to get exams by name',
          error: err,
        });
    }
  },

  // Get by year
  async getByYear(req: Request, res: Response) {
    try {
      const { year } = req.params;
      const result = await healfTutorialExamService.getExamsByYear(
        +year,
        req.query as any,
      );
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      res
        .status(500)
        .json({
          success: false,
          message: 'Failed to get exams by year',
          error: err,
        });
    }
  },

  // Get exams with failed subjects
  async getFailedSubjects(req: Request, res: Response) {
    try {
      const { year } = req.params;
      const result = await healfTutorialExamService.getExamsWithFailedSubjects(
        +year,
        req.query as any,
      );
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      res
        .status(500)
        .json({
          success: false,
          message: 'Failed to get failed subject exams',
          error: err,
        });
    }
  },

  // Update
  async updateExam(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const result = await healfTutorialExamService.updateExam(id, req.body);
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      res
        .status(500)
        .json({ success: false, message: 'Failed to update exam', error: err });
    }
  },

  // Soft Delete
  async deleteExam(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const result = await healfTutorialExamService.deleteExam(id);
      res.status(200).json({ success: true, data: result });
    } catch (err) {
      res
        .status(500)
        .json({ success: false, message: 'Failed to delete exam', error: err });
    }
  },
};
