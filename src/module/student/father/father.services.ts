import { UserInformation } from './father.interface';
import fatherModel from './father.model';

const createFatherIntoDB = async (payload: UserInformation) => {
  const result = await fatherModel.create(payload);
  return result;
};

const getAllFatherIntoDB = async () => {
  const result = await fatherModel.find();
  return result;
};

const getSingleFatherIntoDB = async (id: string | number) => {
  const result = await fatherModel.findById(id);
  return result;
};

const deleteSingleFatherIntoDB = async (id: string | number) => {
  const result = await fatherModel.findByIdAndDelete(id);
  return result;
};

const updateSingleByPatchFatherIntoDB = async (
  id: string | number,
  info: object,
) => {
  const result = await fatherModel.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  return result;
};

const updateSingleByPutFatherIntoDB = async (
  id: string | number,
  info: object,
) => {
  const result = await fatherModel.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  return result;
};

const FatherDB = {
  createFatherIntoDB,
  getAllFatherIntoDB,
  getSingleFatherIntoDB,
  deleteSingleFatherIntoDB,
  updateSingleByPatchFatherIntoDB,
  updateSingleByPutFatherIntoDB,
};
export default FatherDB;
