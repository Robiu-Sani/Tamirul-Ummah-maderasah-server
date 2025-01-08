import { Request, Response } from 'express';
import consultDB from './consulting.services';

const createConsult = async (req: Request, res: Response) => {
  try {
    const payload = req.body;

    const data = await consultDB.createConsultIntoDB(payload);
    res.json({
      status: true,
      message: 'data got successuflly',
      data,
    });
  } catch (err) {
    res.json({
      status: true,
      message: 'data got successuflly',
      error: err,
    });
  }
};

const consultControllar = {
  createConsult,
};
export default consultControllar;
