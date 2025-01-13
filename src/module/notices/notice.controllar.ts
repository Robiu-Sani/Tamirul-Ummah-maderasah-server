import { Request, Response } from 'express';
import noticeDB from './notice.service';

const createNotice = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const data = await noticeDB.createNoticeIntoDB(payload);
    res.json({
      status: true,
      message: 'Notice is posted successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Notice is not created successfully',
      error,
    });
  }
};

const getAllNotice = async (req: Request, res: Response) => {
  try {
    const data = await noticeDB.getAllNoticeIntoDB();
    res.json({
      status: true,
      message: 'All notice got successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Notice is not get successfully',
      error,
    });
  }
};

const getBannerNotice = async (req: Request, res: Response) => {
  try {
    const data = await noticeDB.getBannerNoticeIntoDB();
    res.json({
      status: true,
      message: 'All notice got successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Notice is not get successfully',
      error,
    });
  }
};

const getSingleNotice = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await noticeDB.getSingleNoticeIntoDB(id);
    res.json({
      status: true,
      message: 'Single notice got successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single notice is not get successfully',
      error,
    });
  }
};

const deleteSingleNotice = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await noticeDB.deleteSingleNoticeIntoDB(id);
    res.json({
      status: true,
      message: 'Single notice delete successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single notice is not delete successfully',
      error,
    });
  }
};

const updateSingleByPatchNotice = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const { id } = req.params;
    const data = await noticeDB.updateSingleByPatchNoticeIntoDB(id, payload);
    res.json({
      status: true,
      message: 'Single notice update successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single notice is not update successfully',
      error,
    });
  }
};

const updateSingleByPutNotice = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const { id } = req.params;
    const data = await noticeDB.updateSingleByPutNoticeIntoDB(id, payload);
    res.json({
      status: true,
      message: 'Single notice update successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single notice is not update successfully',
      error,
    });
  }
};

const noticeController = {
  createNotice,
  getAllNotice,
  getSingleNotice,
  deleteSingleNotice,
  updateSingleByPatchNotice,
  updateSingleByPutNotice,
  getBannerNotice,
};

export default noticeController;
