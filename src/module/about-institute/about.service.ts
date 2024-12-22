import { aboutInterface } from './about.interface';
import AboutModel from './about.model';

const createAboutIntoDB = async (payload: aboutInterface) => {
  const result = await AboutModel.create(payload);
  return result;
};

const getAllAboutIntoDB = async () => {
  const result = await AboutModel.find();
  return result;
};

const getSingleAboutIntoDB = async (id: string | number) => {
  const result = await AboutModel.findById(id);

  return result;
};

const deleteSingleAboutIntoDB = async (id: string | number) => {
  const result = await AboutModel.findByIdAndDelete(id);
  return result;
};

const updateSingleByPatchAboutIntoDB = async (
  id: string | number,
  info: object,
) => {
  const result = await AboutModel.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  return result;
};

const updateSingleByPutAboutIntoDB = async (
  id: string | number,
  info: object,
) => {
  const result = await AboutModel.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  return result;
};

const AboutDB = {
  createAboutIntoDB,
  getAllAboutIntoDB,
  getSingleAboutIntoDB,
  deleteSingleAboutIntoDB,
  updateSingleByPatchAboutIntoDB,
  updateSingleByPutAboutIntoDB,
};
export default AboutDB;
