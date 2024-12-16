import { Request, Response } from 'express';
import FirstSamisterDB from './1stsamester.service';

const createFirstSamister = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const data = await FirstSamisterDB.createFirstSamisterIntoDB(payload);
    res.json({
      status: true,
      message: 'FirstSamister is posted successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'FirstSamister is not created successfully',
      error,
    });
  }
};

const getAllFirstSamister = async (req: Request, res: Response) => {
  try {
    const data = await FirstSamisterDB.getAllFirstSamisterIntoDB();
    res.json({
      status: true,
      message: 'All FirstSamister got successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'FirstSamister is not get successfully',
      error,
    });
  }
};

const getSingleFirstSamister = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await FirstSamisterDB.getSingleFirstSamisterIntoDB(id);
    res.json({
      status: true,
      message: 'Single FirstSamister got successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single FirstSamister is not get successfully',
      error,
    });
  }
};

const deleteSingleFirstSamister = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await FirstSamisterDB.deleteSingleFirstSamisterIntoDB(id);
    res.json({
      status: true,
      message: 'Single FirstSamister delete successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single FirstSamister is not delete successfully',
      error,
    });
  }
};

const updateSingleByPatchFirstSamister = async (
  req: Request,
  res: Response,
) => {
  try {
    const payload = req.body;
    const { id } = req.params;
    const data = await FirstSamisterDB.updateSingleByPatchFirstSamisterIntoDB(
      id,
      payload,
    );
    res.json({
      status: true,
      message: 'Single FirstSamister update successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single FirstSamister is not update successfully',
      error,
    });
  }
};

const updateSingleByPutFirstSamister = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const { id } = req.params;
    const data = await FirstSamisterDB.updateSingleByPutFirstSamisterIntoDB(
      id,
      payload,
    );
    res.json({
      status: true,
      message: 'Single FirstSamister update successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single FirstSamister is not update successfully',
      error,
    });
  }
};

const FirstSamisterController = {
  createFirstSamister,
  getAllFirstSamister,
  getSingleFirstSamister,
  deleteSingleFirstSamister,
  updateSingleByPatchFirstSamister,
  updateSingleByPutFirstSamister,
};

export default FirstSamisterController;
