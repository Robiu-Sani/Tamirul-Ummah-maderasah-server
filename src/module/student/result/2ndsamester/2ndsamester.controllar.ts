import { Request, Response } from 'express';
import SecendSamisterDB from './2ndsamester.service';

const createSecendSamister = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const data = await SecendSamisterDB.createSecendSamisterIntoDB(payload);
    res.json({
      status: true,
      message: 'SecendSamister is posted successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'SecendSamister is not created successfully',
      error,
    });
  }
};

const getAllSecendSamister = async (req: Request, res: Response) => {
  try {
    const data = await SecendSamisterDB.getAllSecendSamisterIntoDB();
    res.json({
      status: true,
      message: 'All SecendSamister got successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'SecendSamister is not get successfully',
      error,
    });
  }
};

const getSingleSecendSamister = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await SecendSamisterDB.getSingleSecendSamisterIntoDB(id);
    res.json({
      status: true,
      message: 'Single SecendSamister got successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single SecendSamister is not get successfully',
      error,
    });
  }
};

const deleteSingleSecendSamister = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await SecendSamisterDB.deleteSingleSecendSamisterIntoDB(id);
    res.json({
      status: true,
      message: 'Single SecendSamister delete successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single SecendSamister is not delete successfully',
      error,
    });
  }
};

const updateSingleByPatchSecendSamister = async (
  req: Request,
  res: Response,
) => {
  try {
    const payload = req.body;
    const { id } = req.params;
    const data = await SecendSamisterDB.updateSingleByPatchSecendSamisterIntoDB(
      id,
      payload,
    );
    res.json({
      status: true,
      message: 'Single SecendSamister update successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single SecendSamister is not update successfully',
      error,
    });
  }
};

const updateSingleByPutSecendSamister = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const { id } = req.params;
    const data = await SecendSamisterDB.updateSingleByPutSecendSamisterIntoDB(
      id,
      payload,
    );
    res.json({
      status: true,
      message: 'Single SecendSamister update successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single SecendSamister is not update successfully',
      error,
    });
  }
};

const SecendSamisterController = {
  createSecendSamister,
  getAllSecendSamister,
  getSingleSecendSamister,
  deleteSingleSecendSamister,
  updateSingleByPatchSecendSamister,
  updateSingleByPutSecendSamister,
};

export default SecendSamisterController;
