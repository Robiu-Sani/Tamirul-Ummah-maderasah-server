import { Request, Response } from 'express';
import TeacherDB from './teacher.service';

const createTeacher = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const data = await TeacherDB.createTeacherIntoDB(payload);
    res.json({
      status: true,
      message: 'Teacher is posted successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Teacher is not created successfully',
      error,
    });
  }
};

const getTableTeacher = async (req: Request, res: Response) => {
  const { page = 1, search = '', class: classFilter = '' } = req.query;
  const limit = 50;
  const skip = (Number(page) - 1) * limit;

  try {
    // Call the service function to fetch data
    const data = await TeacherDB.getTeacherTableDataDB({
      page: Number(page),
      search: String(search),
      classFilter: String(classFilter),
      limit,
      skip,
    });

    // Respond with the fetched data
    res.json({
      status: true,
      message: 'All teachers retrieved successfully',
      data,
    });
  } catch (error) {
    // Respond with an error
    res.json({
      status: false,
      message: 'teacher data retrieval failed',
      error,
    });
  }
};

const getClientSiteTeacherControllar = async (req: Request, res: Response) => {
  try {
    const data = await TeacherDB.getClientSiteTeacher();
    res.json({
      status: true,
      message: 'All Teacher got successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Teacher is not get successfully',
      error,
    });
  }
};

const getAllTeacher = async (req: Request, res: Response) => {
  try {
    const data = await TeacherDB.getAllTeacherIntoDB();
    res.json({
      status: true,
      message: 'All Teacher got successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Teacher is not get successfully',
      error,
    });
  }
};

const getSingleTeacher = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await TeacherDB.getSingleTeacherIntoDB(id);
    res.json({
      status: true,
      message: 'Single Teacher got successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single Teacher is not get successfully',
      error,
    });
  }
};

const deleteSingleTeacher = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await TeacherDB.deleteSingleTeacherIntoDB(id);
    res.json({
      status: true,
      message: 'Single Teacher delete successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single Teacher is not delete successfully',
      error,
    });
  }
};

const updateSingleByPatchTeacher = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const { id } = req.params;
    const data = await TeacherDB.updateSingleByPatchTeacherIntoDB(id, payload);
    res.json({
      status: true,
      message: 'Single Teacher update successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single Teacher is not update successfully',
      error,
    });
  }
};

const updateSingleByPutTeacher = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const { id } = req.params;
    const data = await TeacherDB.updateSingleByPutTeacherIntoDB(id, payload);
    res.json({
      status: true,
      message: 'Single Teacher update successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single Teacher is not update successfully',
      error,
    });
  }
};

const TeacherController = {
  createTeacher,
  getAllTeacher,
  getSingleTeacher,
  deleteSingleTeacher,
  updateSingleByPatchTeacher,
  updateSingleByPutTeacher,
  getTableTeacher,
  getClientSiteTeacherControllar,
};

export default TeacherController;
