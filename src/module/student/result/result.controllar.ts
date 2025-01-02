import { Request, Response } from 'express';
import { resultDB } from './result.services';

const createResult = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const data = resultDB.createResultsIntoDB(payload);
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
    const data = resultDB.getAllResultIntoDB(1);
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

export const resultControllar = {
  createResult,
  getAllResult,
};
