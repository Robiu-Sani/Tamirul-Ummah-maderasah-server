import { Request, Response } from 'express';
import { resultDB } from './result.services';

const createResult = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const data = await resultDB.createResultsIntoDB(payload);

    res.json({
      status: true,
      message: 'result submited successfully',
      data,
    });
  } catch (err) {
    res.json({
      status: false,
      message: 'result is not submited successfully',
      error: err,
    });
  }
};

const getAllResult = async (req: Request, res: Response) => {
  try {
    const data = await resultDB.getAllResultIntoDB(0);
    res.json({
      status: true,
      message: 'result get successfully',
      data,
    });
  } catch (err) {
    res.json({
      status: false,
      message: 'result is not get successfully',
      error: err,
    });
  }
};

const getTableResult = async (req: Request, res: Response) => {
  try {
    const skip = parseInt(req.query.skip as string) || 0;
    const search = (req.query.search as string) || '';
    const studentClass = (req.query.studentClass as string) || '';

    const data = await resultDB.getResultTableDataIntoDB(
      skip,
      search,
      studentClass,
    );

    res.json({
      status: true,
      message: 'Result table data fetched successfully',
      data,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'Failed to fetch result table data',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};

const getSingleResult = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    // Validate 'id' to ensure it's not undefined or null
    if (!id) {
      res.status(400).json({
        status: false,
        message: 'Invalid or missing ID parameter.',
      });
      return;
    }

    // Fetch the result data from the database
    const data = await resultDB.getSingleResultIntoDB(id);

    // Ensure 'data' is not null or undefined
    if (!data) {
      res.status(404).json({
        status: false,
        message: 'Result not found for the given ID.',
      });
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let tutiral: any = null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let firstTutiral: any = null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let halfYearly: any = null;

    // If 'exexamName' matches "Half Yearly Exam", fetch additional data
    if (data.examName === 'Half Yearly Exam') {
      tutiral = await resultDB.getOnlySubjectsNumbersIntoDB(
        data.studentId,
        'First Tutorial',
      );
    }

    if (data.examName === 'Final Exam') {
      tutiral = await resultDB.getOnlySubjectsNumbersIntoDB(
        data.studentId,
        'Second Tutorial',
      );
      firstTutiral = await resultDB.getOnlySubjectsNumbersIntoDB(
        data.studentId,
        'First Tutorial',
      );
      halfYearly = await resultDB.getOnlySubjectsNumbersIntoDB(
        data.studentId,
        'First Tutorial',
      );
    }

    res.json({
      status: true,
      message: 'Result retrieved successfully',
      tutiral: tutiral ? tutiral.subjects : false,
      halfYearly: halfYearly ? halfYearly.subjects : false,
      firstTutiral: firstTutiral ? firstTutiral.subjects : false,
      data,
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      message: 'Failed to retrieve the result',
      error: err instanceof Error ? err.message : err,
    });
  }
};

const deleteResult = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await resultDB.deleteResultIntoDB(id);
    res.json({
      status: true,
      message: 'result delete successfully',
      data,
    });
  } catch (err) {
    res.json({
      status: false,
      message: 'result is not delete successfully',
      error: err,
    });
  }
};

export const resultControllar = {
  createResult,
  getAllResult,
  deleteResult,
  getTableResult,
  getSingleResult,
};
