import { Request, Response } from 'express';
import SecendTutiralDB from './2ndtutiral.services';

const createSecendTutiral = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const data = await SecendTutiralDB.createSecendTutiralIntoDB(payload);
    res.json({
      status: true,
      message: 'SecendTutiral is posted successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'SecendTutiral is not created successfully',
      error,
    });
  }
};

const getAllSecendTutiral = async (req: Request, res: Response) => {
  try {
    const data = await SecendTutiralDB.getAllSecendTutiralIntoDB();
    res.json({
      status: true,
      message: 'All SecendTutiral got successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'SecendTutiral is not get successfully',
      error,
    });
  }
};

const getSingleSecendTutiral = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await SecendTutiralDB.getSingleSecendTutiralIntoDB(id);
    res.json({
      status: true,
      message: 'Single SecendTutiral got successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single SecendTutiral is not get successfully',
      error,
    });
  }
};

const deleteSingleSecendTutiral = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await SecendTutiralDB.deleteSingleSecendTutiralIntoDB(id);
    res.json({
      status: true,
      message: 'Single SecendTutiral delete successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single SecendTutiral is not delete successfully',
      error,
    });
  }
};

const updateSingleByPatchSecendTutiral = async (
  req: Request,
  res: Response,
) => {
  try {
    const payload = req.body;
    const { id } = req.params;
    const data = await SecendTutiralDB.updateSingleByPatchSecendTutiralIntoDB(
      id,
      payload,
    );
    res.json({
      status: true,
      message: 'Single SecendTutiral update successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single SecendTutiral is not update successfully',
      error,
    });
  }
};

const updateSingleByPutSecendTutiral = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const { id } = req.params;
    const data = await SecendTutiralDB.updateSingleByPutSecendTutiralIntoDB(
      id,
      payload,
    );
    res.json({
      status: true,
      message: 'Single SecendTutiral update successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single SecendTutiral is not update successfully',
      error,
    });
  }
};

const SecendTutiralController = {
  createSecendTutiral,
  getAllSecendTutiral,
  getSingleSecendTutiral,
  deleteSingleSecendTutiral,
  updateSingleByPatchSecendTutiral,
  updateSingleByPutSecendTutiral,
};

export default SecendTutiralController;
