import { Request, Response } from 'express';
import { healfTutorialExamService } from './Healf.services';

export const healfTutorialExamController = () => {
  return {
    // Create new exam
    async createExam(req: Request, res: Response) {
      try {
        const examData = req.body;
        const result = await healfTutorialExamService.createExam(examData);

        res.status(201).json({
          success: true,
          message: 'Exam created successfully',
          data: result,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: 'Error creating exam',
          error: error instanceof Error ? error.message : error,
        });
      }
    },

    // Get all exams with pagination
    async getAllExams(req: Request, res: Response) {
      try {
        const filters = {
          searchTerm: req.query.searchTerm as string,
          ...req.query,
        };

        const paginationOptions = {
          page: parseInt(req.query.page as string) || 1,
          limit: parseInt(req.query.limit as string) || 10,
          sortBy: req.query.sortBy as string,
          sortOrder: req.query.sortOrder as 'asc' | 'desc',
        };

        const result = await healfTutorialExamService.getAllExams(
          filters,
          paginationOptions,
        );

        res.status(200).json({
          success: true,
          message: 'Exams retrieved successfully',
          meta: {
            page: result.page,
            limit: result.limit,
            total: result.total,
          },
          data: result.data,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: 'Error retrieving exams',
          error: error instanceof Error ? error.message : error,
        });
      }
    },

    // Get exams by teacher ID
    async getExamsByTeacher(req: Request, res: Response) {
      try {
        const { teacherId } = req.params;
        const paginationOptions = {
          page: parseInt(req.query.page as string) || 1,
          limit: parseInt(req.query.limit as string) || 10,
          sortBy: req.query.sortBy as string,
          sortOrder: req.query.sortOrder as 'asc' | 'desc',
        };

        const result = await healfTutorialExamService.getExamsByTeacher(
          teacherId,
          paginationOptions,
        );

        res.status(200).json({
          success: true,
          message: 'Teacher exams retrieved successfully',
          meta: {
            page: result.page,
            limit: result.limit,
            total: result.total,
          },
          data: result.data,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: 'Error retrieving teacher exams',
          error: error instanceof Error ? error.message : error,
        });
      }
    },

    // Get exams by user ID
    async getExamsByUser(req: Request, res: Response) {
      try {
        const { userId } = req.params;
        const paginationOptions = {
          page: parseInt(req.query.page as string) || 1,
          limit: parseInt(req.query.limit as string) || 10,
          sortBy: req.query.sortBy as string,
          sortOrder: req.query.sortOrder as 'asc' | 'desc',
        };

        const result = await healfTutorialExamService.getExamsByUser(
          userId,
          paginationOptions,
        );

        res.status(200).json({
          success: true,
          message: 'User exams retrieved successfully',
          meta: {
            page: result.page,
            limit: result.limit,
            total: result.total,
          },
          data: result.data,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: 'Error retrieving user exams',
          error: error instanceof Error ? error.message : error,
        });
      }
    },

    // Get exams by exam name
    async getExamsByName(req: Request, res: Response) {
      try {
        const { examName } = req.params;
        const paginationOptions = {
          page: parseInt(req.query.page as string) || 1,
          limit: parseInt(req.query.limit as string) || 10,
          sortBy: req.query.sortBy as string,
          sortOrder: req.query.sortOrder as 'asc' | 'desc',
        };

        const result = await healfTutorialExamService.getExamsByName(
          examName,
          paginationOptions,
        );

        res.status(200).json({
          success: true,
          message: 'Exams by name retrieved successfully',
          meta: {
            page: result.page,
            limit: result.limit,
            total: result.total,
          },
          data: result.data,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: 'Error retrieving exams by name',
          error: error instanceof Error ? error.message : error,
        });
      }
    },

    // Get exams by year
    async getExamsByYear(req: Request, res: Response) {
      try {
        const { year } = req.params;
        const paginationOptions = {
          page: parseInt(req.query.page as string) || 1,
          limit: parseInt(req.query.limit as string) || 10,
          sortBy: req.query.sortBy as string,
          sortOrder: req.query.sortOrder as 'asc' | 'desc',
        };

        const result = await healfTutorialExamService.getExamsByYear(
          parseInt(year),
          paginationOptions,
        );

        res.status(200).json({
          success: true,
          message: 'Exams by year retrieved successfully',
          meta: {
            page: result.page,
            limit: result.limit,
            total: result.total,
          },
          data: result.data,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: 'Error retrieving exams by year',
          error: error instanceof Error ? error.message : error,
        });
      }
    },

    // Get exams with subjects under 33%
    async getExamsWithFailedSubjects(req: Request, res: Response) {
      try {
        const { year } = req.params;
        const paginationOptions = {
          page: parseInt(req.query.page as string) || 1,
          limit: parseInt(req.query.limit as string) || 10,
        };

        const result =
          await healfTutorialExamService.getExamsWithFailedSubjects(
            parseInt(year),
            paginationOptions,
          );

        res.status(200).json({
          success: true,
          message: 'Exams with failed subjects retrieved successfully',
          meta: {
            page: result.page,
            limit: result.limit,
            total: result.total,
          },
          data: result.data,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: 'Error retrieving exams with failed subjects',
          error: error instanceof Error ? error.message : error,
        });
      }
    },

    // Update exam
    async updateExam(req: Request, res: Response) {
      try {
        const { id } = req.params;
        const updateData = req.body;
        const result = await healfTutorialExamService.updateExam(
          id,
          updateData,
        );

        if (!result) {
          return res.status(404).json({
            success: false,
            message: 'Exam not found',
          });
        }

        res.status(200).json({
          success: true,
          message: 'Exam updated successfully',
          data: result,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: 'Error updating exam',
          error: error instanceof Error ? error.message : error,
        });
      }
    },

    // Delete exam
    async deleteExam(req: Request, res: Response) {
      try {
        const { id } = req.params;
        const result = await healfTutorialExamService.deleteExam(id);

        if (!result) {
          return res.status(404).json({
            success: false,
            message: 'Exam not found',
          });
        }

        res.status(200).json({
          success: true,
          message: 'Exam deleted successfully',
          data: result,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: 'Error deleting exam',
          error: error instanceof Error ? error.message : error,
        });
      }
    },
  };
};
