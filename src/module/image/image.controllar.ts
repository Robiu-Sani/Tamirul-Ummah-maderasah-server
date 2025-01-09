import { Request, Response } from 'express';
import imageDB from './image.service';

const createImage = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const data = await imageDB.createImagesIntoDB(payload);
    res.json({
      status: true,
      message: 'image is posted successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'image is not created successfully',
      error,
    });
  }
};

const getImage = async (req: Request, res: Response) => {
  try {
    const skip = Number(req.query);
    const data = await imageDB.getImagesIntoDB(skip);
    res.json({
      status: true,
      message: 'image is get successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'image is not get successfully',
      error,
    });
  }
};

const getClientImages = async (req: Request, res: Response) => {
  try {
    const data = await imageDB.getClientImagesIntoDB();
    res.json({
      status: true,
      message: 'image is get successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'image is not get successfully',
      error,
    });
  }
};

const deleteImage = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await imageDB.deleteImageIntoDB(id);
    res.json({
      status: true,
      message: 'image is delete successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'image is not delete successfully',
      error,
    });
  }
};

const imageControllar = {
  createImage,
  getImage,
  deleteImage,
  getClientImages,
};
export default imageControllar;
