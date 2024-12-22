import { Request, Response } from 'express';
import UserDB from './user.service';

const createUser = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const data = await UserDB.createUserIntoDB(payload);
    res.json({
      status: true,
      message: 'User is posted successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'User is not created successfully',
      error,
    });
  }
};

const getAllUser = async (req: Request, res: Response) => {
  try {
    const data = await UserDB.getAllUserIntoDB();
    res.json({
      status: true,
      message: 'All User got successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'User is not get successfully',
      error,
    });
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await UserDB.getSingleUserIntoDB(id);
    res.json({
      status: true,
      message: 'Single User got successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single User is not get successfully',
      error,
    });
  }
};

const deleteSingleUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await UserDB.deleteSingleUserIntoDB(id);
    res.json({
      status: true,
      message: 'Single User delete successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single User is not delete successfully',
      error,
    });
  }
};

const updateSingleByPatchUser = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const { id } = req.params;
    const data = await UserDB.updateSingleByPatchUserIntoDB(id, payload);
    res.json({
      status: true,
      message: 'Single User update successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single User is not update successfully',
      error,
    });
  }
};

const updateSingleByPutUser = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const { id } = req.params;
    const data = await UserDB.updateSingleByPutUserIntoDB(id, payload);
    res.json({
      status: true,
      message: 'Single User update successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single User is not update successfully',
      error,
    });
  }
};

const UserController = {
  createUser,
  getAllUser,
  getSingleUser,
  deleteSingleUser,
  updateSingleByPatchUser,
  updateSingleByPutUser,
};

export default UserController;
