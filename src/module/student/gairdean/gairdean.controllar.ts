import { Request, Response } from 'express';
import GairdeanDB from './gairdean.servece';

const createGairdean = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const data = await GairdeanDB.createGairdeanIntoDB(payload);
    res.json({
      status: true,
      message: 'Gairdean is posted successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Gairdean is not created successfully',
      error,
    });
  }
};

const getAllGairdean = async (req: Request, res: Response) => {
  try {
    const data = await GairdeanDB.getAllGairdeanIntoDB();
    res.json({
      status: true,
      message: 'All Gairdean got successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Gairdean is not get successfully',
      error,
    });
  }
};

const getSingleGairdean = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await GairdeanDB.getSingleGairdeanIntoDB(id);
    res.json({
      status: true,
      message: 'Single Gairdean got successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single Gairdean is not get successfully',
      error,
    });
  }
};

const deleteSingleGairdean = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await GairdeanDB.deleteSingleGairdeanIntoDB(id);
    res.json({
      status: true,
      message: 'Single Gairdean delete successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single Gairdean is not delete successfully',
      error,
    });
  }
};

const updateSingleByPatchGairdean = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const { id } = req.params;
    const data = await GairdeanDB.updateSingleByPatchGairdeanIntoDB(
      id,
      payload,
    );
    res.json({
      status: true,
      message: 'Single Gairdean update successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single Gairdean is not update successfully',
      error,
    });
  }
};

const updateSingleByPutGairdean = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const { id } = req.params;
    const data = await GairdeanDB.updateSingleByPutGairdeanIntoDB(id, payload);
    res.json({
      status: true,
      message: 'Single Gairdean update successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single Gairdean is not update successfully',
      error,
    });
  }
};

const GairdeanController = {
  createGairdean,
  getAllGairdean,
  getSingleGairdean,
  deleteSingleGairdean,
  updateSingleByPatchGairdean,
  updateSingleByPutGairdean,
};

export default GairdeanController;