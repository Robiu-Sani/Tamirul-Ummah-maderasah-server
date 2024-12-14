import { Request, Response } from 'express';
import InstitutionDB from './contact.service';

const createInstitution = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const data = await InstitutionDB.createInstitutionIntoDB(payload);
    res.json({
      status: true,
      message: 'Institution is posted successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Institution is not created successfully',
      error,
    });
  }
};

const getAllInstitution = async (req: Request, res: Response) => {
  try {
    const data = await InstitutionDB.getAllInstitutionIntoDB();
    res.json({
      status: true,
      message: 'All Institution got successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Institution is not get successfully',
      error,
    });
  }
};

const getSingleInstitution = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await InstitutionDB.getSingleInstitutionIntoDB(id);
    res.json({
      status: true,
      message: 'Single Institution got successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single Institution is not get successfully',
      error,
    });
  }
};

const deleteSingleInstitution = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await InstitutionDB.deleteSingleInstitutionIntoDB(id);
    res.json({
      status: true,
      message: 'Single Institution delete successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single Institution is not delete successfully',
      error,
    });
  }
};

const updateSingleByPatchInstitution = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const { id } = req.params;
    const data = await InstitutionDB.updateSingleByPatchInstitutionIntoDB(
      id,
      payload,
    );
    res.json({
      status: true,
      message: 'Single Institution update successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single Institution is not update successfully',
      error,
    });
  }
};

const updateSingleByPutInstitution = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const { id } = req.params;
    const data = await InstitutionDB.updateSingleByPutInstitutionIntoDB(
      id,
      payload,
    );
    res.json({
      status: true,
      message: 'Single Institution update successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single Institution is not update successfully',
      error,
    });
  }
};

const InstitutionController = {
  createInstitution,
  getAllInstitution,
  getSingleInstitution,
  deleteSingleInstitution,
  updateSingleByPatchInstitution,
  updateSingleByPutInstitution,
};

export default InstitutionController;
