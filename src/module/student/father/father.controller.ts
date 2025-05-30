import { Request, Response } from 'express';
import FatherDB from './father.services';

const createFather = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const data = await FatherDB.createFatherIntoDB(payload);
    res.json({
      status: true,
      message: 'Father is posted successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Father is not created successfully',
      error,
    });
  }
};

const getAllFather = async (req: Request, res: Response) => {
  try {
    const data = await FatherDB.getAllFatherIntoDB();
    res.json({
      status: true,
      message: 'All Father got successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Father is not get successfully',
      error,
    });
  }
};

const getSingleFather = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await FatherDB.getSingleFatherIntoDB(id);
    res.json({
      status: true,
      message: 'Single Father got successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single Father is not get successfully',
      error,
    });
  }
};

const deleteSingleFather = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await FatherDB.deleteSingleFatherIntoDB(id);
    res.json({
      status: true,
      message: 'Single Father delete successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single Father is not delete successfully',
      error,
    });
  }
};

const updateSingleByPatchFather = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const { id } = req.params;
    const data = await FatherDB.updateSingleByPatchFatherIntoDB(id, payload);
    res.json({
      status: true,
      message: 'Single Father update successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single Father is not update successfully',
      error,
    });
  }
};

const updateSingleByPutFather = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const { id } = req.params;
    const data = await FatherDB.updateSingleByPutFatherIntoDB(id, payload);
    res.json({
      status: true,
      message: 'Single Father update successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single Father is not update successfully',
      error,
    });
  }
};

const getTableFather = async (req: Request, res: Response) => {
  const { page = 1, search = '' } = req.query;
  const limit = 50;
  const skip = (Number(page) - 1) * limit;

  try {
    // Call the service function to fetch data
    const data = await FatherDB.getFatherTableDataDB({
      page: Number(page),
      search: String(search),
      limit,
      skip,
    });

    // Respond with the fetched data
    res.json({
      status: true,
      message: 'All fathers retrieved successfully',
      data,
    });
  } catch (error) {
    // Respond with an error
    res.json({
      status: false,
      message: 'father data retrieval failed',
      error,
    });
  }
};

const FatherController = {
  createFather,
  getAllFather,
  getSingleFather,
  deleteSingleFather,
  updateSingleByPatchFather,
  updateSingleByPutFather,
  getTableFather,
};

export default FatherController;
