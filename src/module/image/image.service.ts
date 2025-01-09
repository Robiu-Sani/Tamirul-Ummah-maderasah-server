import { imageInterface } from './image.interface';
import imageModel from './image.model';

const createImagesIntoDB = async (payload: imageInterface) => {
  const result = await imageModel.create(payload);
  return result;
};

const getImagesIntoDB = async (skip: number) => {
  const result = (await imageModel.find().limit(70).skip(skip)).reverse();
  const totalimage = await imageModel.countDocuments();
  const data = {
    data: result,
    total: totalimage,
  };
  return data;
};

const getClientImagesIntoDB = async () => {
  const result = (await imageModel.find().limit(12)).reverse();
  return result;
};

const deleteImageIntoDB = async (id: string | number) => {
  const result = await imageModel.findByIdAndDelete(id);
  return result;
};

const imageDB = {
  createImagesIntoDB,
  getImagesIntoDB,
  deleteImageIntoDB,
  getClientImagesIntoDB,
};
export default imageDB;
