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

export const resultControllar = {
  createResult,
  getAllResult,
  getTableResult,
};
