import { Request, Response } from 'express';
import MotherDB from './mother.service';

const createMother = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const data = await MotherDB.createMotherIntoDB(payload);
    res.json({
      status: true,
      message: 'Mother is posted successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Mother is not created successfully',
      error,
    });
  }
};

const getAllMother = async (req: Request, res: Response) => {
  try {
    const data = await MotherDB.getAllMotherIntoDB();
    res.json({
      status: true,
      message: 'All Mother got successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Mother is not get successfully',
      error,
    });
  }
};

const getSingleMother = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await MotherDB.getSingleMotherIntoDB(id);
    res.json({
      status: true,
      message: 'Single Mother got successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single Mother is not get successfully',
      error,
    });
  }
};

const deleteSingleMother = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await MotherDB.deleteSingleMotherIntoDB(id);
    res.json({
      status: true,
      message: 'Single Mother delete successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single Mother is not delete successfully',
      error,
    });
  }
};

const updateSingleByPatchMother = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const { id } = req.params;
    const data = await MotherDB.updateSingleByPatchMotherIntoDB(id, payload);
    res.json({
      status: true,
      message: 'Single Mother update successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single Mother is not update successfully',
      error,
    });
  }
};

const updateSingleByPutMother = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const { id } = req.params;
    const data = await MotherDB.updateSingleByPutMotherIntoDB(id, payload);
    res.json({
      status: true,
      message: 'Single Mother update successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single Mother is not update successfully',
      error,
    });
  }
};

const MotherController = {
  createMother,
  getAllMother,
  getSingleMother,
  deleteSingleMother,
  updateSingleByPatchMother,
  updateSingleByPutMother,
};

export default MotherController;
