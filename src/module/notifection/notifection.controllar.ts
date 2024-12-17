import { Request, Response } from 'express';
import NotifectionDB from './notifection.service';

const createNotifection = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const data = await NotifectionDB.createNotifectionIntoDB(payload);
    res.json({
      status: true,
      message: 'Notifection is Notifection successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Notifection is not created successfully',
      error,
    });
  }
};

const getAllNotifection = async (req: Request, res: Response) => {
  try {
    const data = await NotifectionDB.getAllNotifectionIntoDB();
    res.json({
      status: true,
      message: 'All Notifection got successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Notifection is not get successfully',
      error,
    });
  }
};

const getSingleNotifection = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await NotifectionDB.getSingleNotifectionIntoDB(id);
    res.json({
      status: true,
      message: 'Single Notifection got successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single Notifection is not get successfully',
      error,
    });
  }
};

const deleteSingleNotifection = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await NotifectionDB.deleteSingleNotifectionIntoDB(id);
    res.json({
      status: true,
      message: 'Single Notifection delete successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single Notifection is not delete successfully',
      error,
    });
  }
};

const updateSingleByPatchNotifection = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const { id } = req.params;
    const data = await NotifectionDB.updateSingleByPatchNotifectionIntoDB(
      id,
      payload,
    );
    res.json({
      status: true,
      message: 'Single Notifection update successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single Notifection is not update successfully',
      error,
    });
  }
};

const updateSingleByPutNotifection = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const { id } = req.params;
    const data = await NotifectionDB.updateSingleByPutNotifectionIntoDB(
      id,
      payload,
    );
    res.json({
      status: true,
      message: 'Single Notifection update successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single Notifection is not update successfully',
      error,
    });
  }
};

const NotifectionController = {
  createNotifection,
  getAllNotifection,
  getSingleNotifection,
  deleteSingleNotifection,
  updateSingleByPatchNotifection,
  updateSingleByPutNotifection,
};

export default NotifectionController;
