import { Request, Response } from 'express';
import FeesStructureDB from './FeesStructure.service';

const createFeesStructure = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const data = await FeesStructureDB.createFeesStructureIntoDB(payload);
    res.json({
      status: true,
      message: 'FeesStructure is posted successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'FeesStructure is not created successfully',
      error,
    });
  }
};

const getAllFeesStructure = async (req: Request, res: Response) => {
  try {
    const data = await FeesStructureDB.getAllFeesStructureIntoDB();
    res.json({
      status: true,
      message: 'All FeesStructure got successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'FeesStructure is not get successfully',
      error,
    });
  }
};

const getSingleFeesStructure = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await FeesStructureDB.getSingleFeesStructureIntoDB(id);
    res.json({
      status: true,
      message: 'Single FeesStructure got successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single FeesStructure is not get successfully',
      error,
    });
  }
};

const deleteSingleFeesStructure = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await FeesStructureDB.deleteSingleFeesStructureIntoDB(id);
    res.json({
      status: true,
      message: 'Single FeesStructure delete successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single FeesStructure is not delete successfully',
      error,
    });
  }
};

const updateSingleByPatchFeesStructure = async (
  req: Request,
  res: Response,
) => {
  try {
    const payload = req.body;
    const { id } = req.params;
    const data = await FeesStructureDB.updateSingleByPatchFeesStructureIntoDB(
      id,
      payload,
    );
    res.json({
      status: true,
      message: 'Single FeesStructure update successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single FeesStructure is not update successfully',
      error,
    });
  }
};

const updateSingleByPutFeesStructure = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const { id } = req.params;
    const data = await FeesStructureDB.updateSingleByPutFeesStructureIntoDB(
      id,
      payload,
    );
    res.json({
      status: true,
      message: 'Single FeesStructure update successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single FeesStructure is not update successfully',
      error,
    });
  }
};

const FeesStructureController = {
  createFeesStructure,
  getAllFeesStructure,
  getSingleFeesStructure,
  deleteSingleFeesStructure,
  updateSingleByPatchFeesStructure,
  updateSingleByPutFeesStructure,
};

export default FeesStructureController;
