import { Request, Response } from 'express';
import FirstTutiralDB from './1stutiral.service';

const createFirstTutiral = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const data = await FirstTutiralDB.createFirstTutiralIntoDB(payload);
    res.json({
      status: true,
      message: 'FirstTutiral is posted successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'FirstTutiral is not created successfully',
      error,
    });
  }
};

const getAllFirstTutiral = async (req: Request, res: Response) => {
  try {
    const data = await FirstTutiralDB.getAllFirstTutiralIntoDB();
    res.json({
      status: true,
      message: 'All FirstTutiral got successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'FirstTutiral is not get successfully',
      error,
    });
  }
};

const getSingleFirstTutiral = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await FirstTutiralDB.getSingleFirstTutiralIntoDB(id);
    res.json({
      status: true,
      message: 'Single FirstTutiral got successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single FirstTutiral is not get successfully',
      error,
    });
  }
};

const deleteSingleFirstTutiral = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await FirstTutiralDB.deleteSingleFirstTutiralIntoDB(id);
    res.json({
      status: true,
      message: 'Single FirstTutiral delete successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single FirstTutiral is not delete successfully',
      error,
    });
  }
};

const updateSingleByPatchFirstTutiral = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const { id } = req.params;
    const data = await FirstTutiralDB.updateSingleByPatchFirstTutiralIntoDB(
      id,
      payload,
    );
    res.json({
      status: true,
      message: 'Single FirstTutiral update successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single FirstTutiral is not update successfully',
      error,
    });
  }
};

const updateSingleByPutFirstTutiral = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const { id } = req.params;
    const data = await FirstTutiralDB.updateSingleByPutFirstTutiralIntoDB(
      id,
      payload,
    );
    res.json({
      status: true,
      message: 'Single FirstTutiral update successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single FirstTutiral is not update successfully',
      error,
    });
  }
};

const getTableStudentFirstTutiralResult = async (
  req: Request,
  res: Response,
) => {
  const { page = 1, search = '', class: classFilter = '' } = req.query;
  const limit = 50;
  const skip = (Number(page) - 1) * limit;

  try {
    // Call the service function to fetch data
    const data = await FirstTutiralDB.getFirstTutiralExamTableData({
      page: Number(page),
      search: String(search),
      classFilter: String(classFilter),
      limit,
      skip,
    });

    // Respond with the fetched data
    res.json({
      status: true,
      message: 'All students first tutiral result retrieved successfully',
      data,
    });
  } catch (error) {
    // Respond with an error
    res.json({
      status: false,
      message: 'Student first tutiral result data retrieval failed',
      error,
    });
  }
};

const FirstTutiralController = {
  createFirstTutiral,
  getAllFirstTutiral,
  getSingleFirstTutiral,
  deleteSingleFirstTutiral,
  updateSingleByPatchFirstTutiral,
  updateSingleByPutFirstTutiral,
  getTableStudentFirstTutiralResult,
};

export default FirstTutiralController;
