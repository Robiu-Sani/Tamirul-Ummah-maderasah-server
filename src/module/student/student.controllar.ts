import { Request, Response } from 'express';
import StudentDB from './student.services';

const createStudent = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const data = await StudentDB.createStudentIntoDB(payload);

    res.json({
      status: true,
      message: 'Student is posted successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Student is not created successfully',
      error,
    });
  }
};

const getAllStudent = async (req: Request, res: Response) => {
  try {
    const data = await StudentDB.getAllStudentIntoDB();
    res.json({
      status: true,
      message: 'All Student got successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Student is not get successfully',
      error,
    });
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await StudentDB.getSingleStudentIntoDB(id);
    res.json({
      status: true,
      message: 'Single Student got successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single Student is not get successfully',
      error,
    });
  }
};

const deleteSingleStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await StudentDB.deleteSingleStudentIntoDB(id);
    res.json({
      status: true,
      message: 'Single Student delete successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single Student is not delete successfully',
      error,
    });
  }
};

const updateSingleByPatchStudent = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const { id } = req.params;
    const data = await StudentDB.updateSingleByPatchStudentIntoDB(id, payload);
    res.json({
      status: true,
      message: 'Single Student update successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single Student is not update successfully',
      error,
    });
  }
};

const updateSingleByPutStudent = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const { id } = req.params;
    const data = await StudentDB.updateSingleByPutStudentIntoDB(id, payload);
    res.json({
      status: true,
      message: 'Single Student update successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single Student is not update successfully',
      error,
    });
  }
};

const StudentController = {
  createStudent,
  getAllStudent,
  getSingleStudent,
  deleteSingleStudent,
  updateSingleByPatchStudent,
  updateSingleByPutStudent,
};

export default StudentController;
