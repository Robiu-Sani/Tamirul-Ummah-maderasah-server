import { Request, Response } from 'express';
import AboutDB from './about.service';

const createAbout = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const data = await AboutDB.createAboutIntoDB(payload);
    res.json({
      status: true,
      message: 'About is posted successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'About is not created successfully',
      error,
    });
  }
};

const getAllAbout = async (req: Request, res: Response) => {
  try {
    const data = await AboutDB.getAllAboutIntoDB();
    res.json({
      status: true,
      message: 'All About got successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'About is not get successfully',
      error,
    });
  }
};

const getBannerData = async (req: Request, res: Response) => {
  try {
    const data = await AboutDB.bannerInfo();
    res.json({
      status: true,
      message: 'All banner info successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'banner info is not get successfully',
      error,
    });
  }
};

const getSingleAbout = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await AboutDB.getSingleAboutIntoDB(id);
    res.json({
      status: true,
      message: 'Single About got successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single About is not get successfully',
      error,
    });
  }
};

const deleteSingleAbout = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await AboutDB.deleteSingleAboutIntoDB(id);
    res.json({
      status: true,
      message: 'Single About delete successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single About is not delete successfully',
      error,
    });
  }
};

const updateSingleByPatchAbout = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const { id } = req.params;
    const data = await AboutDB.updateSingleByPatchAboutIntoDB(id, payload);
    res.json({
      status: true,
      message: 'Single About update successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single About is not update successfully',
      error,
    });
  }
};

const updateSingleByPutAbout = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const { id } = req.params;
    const data = await AboutDB.updateSingleByPutAboutIntoDB(id, payload);
    res.json({
      status: true,
      message: 'Single About update successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single About is not update successfully',
      error,
    });
  }
};

const AboutController = {
  createAbout,
  getAllAbout,
  getSingleAbout,
  deleteSingleAbout,
  updateSingleByPatchAbout,
  updateSingleByPutAbout,
  getBannerData,
};

export default AboutController;
