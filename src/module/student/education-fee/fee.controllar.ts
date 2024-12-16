import { Request, Response } from 'express';
import FeeDB from './fee.service';

const createFee = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const data = await FeeDB.createFeeIntoDB(payload);
    res.json({
      status: true,
      message: 'Fee is posted successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Fee is not created successfully',
      error,
    });
  }
};

const getAllFee = async (req: Request, res: Response) => {
  try {
    const data = await FeeDB.getAllFeeIntoDB();
    res.json({
      status: true,
      message: 'All Fee got successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Fee is not get successfully',
      error,
    });
  }
};

const getSingleFee = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await FeeDB.getSingleFeeIntoDB(id);
    res.json({
      status: true,
      message: 'Single Fee got successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single Fee is not get successfully',
      error,
    });
  }
};

const deleteSingleFee = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await FeeDB.deleteSingleFeeIntoDB(id);
    res.json({
      status: true,
      message: 'Single Fee delete successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single Fee is not delete successfully',
      error,
    });
  }
};

const updateSingleByPatchFee = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const { id } = req.params;
    const data = await FeeDB.updateSingleByPatchFeeIntoDB(id, payload);
    res.json({
      status: true,
      message: 'Single Fee update successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single Fee is not update successfully',
      error,
    });
  }
};

const updateSingleByPutFee = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const { id } = req.params;
    const data = await FeeDB.updateSingleByPutFeeIntoDB(id, payload);
    res.json({
      status: true,
      message: 'Single Fee update successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single Fee is not update successfully',
      error,
    });
  }
};

const FeeController = {
  createFee,
  getAllFee,
  getSingleFee,
  deleteSingleFee,
  updateSingleByPatchFee,
  updateSingleByPutFee,
};

export default FeeController;
