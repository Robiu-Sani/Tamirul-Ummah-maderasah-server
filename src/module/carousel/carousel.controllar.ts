import { Request, Response } from 'express';
import SliderDB from './carousel.servece';

const createSlider = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const data = await SliderDB.createSliderIntoDB(payload);
    res.json({
      status: true,
      message: 'Slider is posted successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Slider is not created successfully',
      error,
    });
  }
};

const getAllSlider = async (req: Request, res: Response) => {
  try {
    const data = await SliderDB.getAllSliderIntoDB();
    res.json({
      status: true,
      message: 'All Slider got successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Slider is not get successfully',
      error,
    });
  }
};

const getSingleSlider = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await SliderDB.getSingleSliderIntoDB(id);
    res.json({
      status: true,
      message: 'Single Slider got successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single Slider is not get successfully',
      error,
    });
  }
};

const deleteSingleSlider = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await SliderDB.deleteSingleSliderIntoDB(id);
    res.json({
      status: true,
      message: 'Single Slider delete successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single Slider is not delete successfully',
      error,
    });
  }
};

const updateSingleByPatchSlider = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const { id } = req.params;
    const data = await SliderDB.updateSingleByPatchSliderIntoDB(id, payload);
    res.json({
      status: true,
      message: 'Single Slider update successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single Slider is not update successfully',
      error,
    });
  }
};

const updateSingleByPutSlider = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const { id } = req.params;
    const data = await SliderDB.updateSingleByPutSliderIntoDB(id, payload);
    res.json({
      status: true,
      message: 'Single Slider update successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single Slider is not update successfully',
      error,
    });
  }
};

const SliderController = {
  createSlider,
  getAllSlider,
  getSingleSlider,
  deleteSingleSlider,
  updateSingleByPatchSlider,
  updateSingleByPutSlider,
};

export default SliderController;
