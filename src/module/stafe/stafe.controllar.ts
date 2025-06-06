import { Request, Response } from 'express';
import StafeDB from './stafe.service';

const createStafe = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const data = await StafeDB.createStafeIntoDB(payload);
    res.json({
      status: true,
      message: 'Stafe is posted successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Stafe is not created successfully',
      error,
    });
  }
};

const staffClientSide = async (req: Request, res: Response) => {
  try {
    const data = await StafeDB.staffClientSideIntoDB();
    res.json({
      status: true,
      message: 'All Stafe got successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Stafe is not get successfully',
      error,
    });
  }
};

const getAllStafe = async (req: Request, res: Response) => {
  try {
    const data = await StafeDB.getAllStafeIntoDB();
    res.json({
      status: true,
      message: 'All Stafe got successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Stafe is not get successfully',
      error,
    });
  }
};

const getSingleStafe = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await StafeDB.getSingleStafeIntoDB(id);
    res.json({
      status: true,
      message: 'Single Stafe got successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single Stafe is not get successfully',
      error,
    });
  }
};

const deleteSingleStafe = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await StafeDB.deleteSingleStafeIntoDB(id);
    res.json({
      status: true,
      message: 'Single Stafe delete successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single Stafe is not delete successfully',
      error,
    });
  }
};

const updateSingleByPatchStafe = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const { id } = req.params;
    const data = await StafeDB.updateSingleByPatchStafeIntoDB(id, payload);
    res.json({
      status: true,
      message: 'Single Stafe update successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single Stafe is not update successfully',
      error,
    });
  }
};

const updateSingleByPutStafe = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const { id } = req.params;
    const data = await StafeDB.updateSingleByPutStafeIntoDB(id, payload);
    res.json({
      status: true,
      message: 'Single Stafe update successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single Stafe is not update successfully',
      error,
    });
  }
};

const getTableStaff = async (req: Request, res: Response) => {
  const { page = 1, search = '', class: classFilter = '' } = req.query;
  const limit = 50;
  const skip = (Number(page) - 1) * limit;

  try {
    // Call the service function to fetch data
    const data = await StafeDB.getStaffTableDataDB({
      page: Number(page),
      search: String(search),
      classFilter: String(classFilter),
      limit,
      skip,
    });

    // Respond with the fetched data
    res.json({
      status: true,
      message: 'All staff retrieved successfully',
      data,
    });
  } catch (error) {
    // Respond with an error
    res.json({
      status: false,
      message: 'staff data retrieval failed',
      error,
    });
  }
};

const StafeController = {
  createStafe,
  getAllStafe,
  getSingleStafe,
  deleteSingleStafe,
  updateSingleByPatchStafe,
  updateSingleByPutStafe,
  getTableStaff,
  staffClientSide,
};

export default StafeController;
