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

const getConsult = async (req: Request, res: Response) => {
  try {
    const data = await consultDB.getConsultIntoDB();
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

const deleteConsult = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await consultDB.deleteConsultIntoDB(id);
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

const getbycategory = async (req: Request, res: Response) => {
  try {
    const { cetagory } = req.params;

    const data = await consultDB.messagesCategoryDB(cetagory);
    res.json({
      status: true,
      message: 'All Notifection got successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Notifection is not get successfully',
      error,
    });
  }
};

const consultControllar = {
  createConsult,
  getConsult,
  deleteConsult,
  getbycategory,
};
export default consultControllar;
