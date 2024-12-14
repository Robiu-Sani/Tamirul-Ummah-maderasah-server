import { SlideData } from './carousel.interface';
import SlideModel from './carousel.model';

const createSliderIntoDB = async (payload: SlideData) => {
  const result = await SlideModel.create(payload);
  return result;
};

const getAllSliderIntoDB = async () => {
  const result = await SlideModel.find();
  return result;
};

const getSingleSliderIntoDB = async (id: string | number) => {
  const result = await SlideModel.findById(id);
  return result;
};

const deleteSingleSliderIntoDB = async (id: string | number) => {
  const result = await SlideModel.findByIdAndDelete(id);
  return result;
};

const updateSingleByPatchSliderIntoDB = async (
  id: string | number,
  info: object,
) => {
  const result = await SlideModel.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  return result;
};

const updateSingleByPutSliderIntoDB = async (
  id: string | number,
  info: object,
) => {
  const result = await SlideModel.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  return result;
};

const SliderDB = {
  createSliderIntoDB,
  getAllSliderIntoDB,
  getSingleSliderIntoDB,
  deleteSingleSliderIntoDB,
  updateSingleByPatchSliderIntoDB,
  updateSingleByPutSliderIntoDB,
};
export default SliderDB;
