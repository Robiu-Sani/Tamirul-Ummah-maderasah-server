import { Request, Response } from 'express';
import gainDB from './gain.services';

const createGain = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const data = await gainDB.createGainIntoDB(payload);
    res.json({
      status: true,
      message: 'our-gain created successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'our-gain is not created successfully',
      error,
    });
  }
};

const getAllgain = async (req: Request, res: Response) => {
  try {
    const data = await gainDB.getAllGainIntoDB();
    res.json({
      status: true,
      message: 'All gain got successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'gain is not get successfully',
      error,
    });
  }
};

const updateGain = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const { id } = req.params;
    const data = await gainDB.updateGainIntoDB(payload, id);
    res.json({
      status: true,
      message: 'Single gain update successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single gain is not update successfully',
      error,
    });
  }
};

const deletGain = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await gainDB.deleteGainIntoDB(id);
    res.json({
      status: true,
      message: 'Single gain delete successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single gain is not delete successfully',
      error,
    });
  }
};

const gainControllar = {
  createGain,
  getAllgain,
  updateGain,
  deletGain,
};

export default gainControllar;
