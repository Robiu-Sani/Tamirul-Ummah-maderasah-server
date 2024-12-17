import { Request, Response } from 'express';
import SelaryDB from './selary.service';

const createSelary = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const data = await SelaryDB.createSelaryIntoDB(payload);
    res.json({
      status: true,
      message: 'Selary is posted successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Selary is not created successfully',
      error,
    });
  }
};

const getAllSelary = async (req: Request, res: Response) => {
  try {
    const data = await SelaryDB.getAllSelaryIntoDB();
    res.json({
      status: true,
      message: 'All Selary got successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Selary is not get successfully',
      error,
    });
  }
};

const getSingleSelary = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await SelaryDB.getSingleSelaryIntoDB(id);
    res.json({
      status: true,
      message: 'Single Selary got successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single Selary is not get successfully',
      error,
    });
  }
};

const deleteSingleSelary = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await SelaryDB.deleteSingleSelaryIntoDB(id);
    res.json({
      status: true,
      message: 'Single Selary delete successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single Selary is not delete successfully',
      error,
    });
  }
};

const updateSingleByPatchSelary = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const { id } = req.params;
    const data = await SelaryDB.updateSingleByPatchSelaryIntoDB(id, payload);
    res.json({
      status: true,
      message: 'Single Selary update successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single Selary is not update successfully',
      error,
    });
  }
};

const updateSingleByPutSelary = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const { id } = req.params;
    const data = await SelaryDB.updateSingleByPutSelaryIntoDB(id, payload);
    res.json({
      status: true,
      message: 'Single Selary update successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single Selary is not update successfully',
      error,
    });
  }
};

const SelaryController = {
  createSelary,
  getAllSelary,
  getSingleSelary,
  deleteSingleSelary,
  updateSingleByPatchSelary,
  updateSingleByPutSelary,
};

export default SelaryController;
