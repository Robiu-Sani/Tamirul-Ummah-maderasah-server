import { StafeDetails } from './stafe.interface';
import StafeModel from './stafe.model';

const createStafeIntoDB = async (payload: StafeDetails) => {
  const result = await StafeModel.create(payload);
  return result;
};

const getAllStafeIntoDB = async () => {
  const result = await StafeModel.find();
  return result;
};

const getSingleStafeIntoDB = async (id: string | number) => {
  const result = await StafeModel.findById(id);

  return result;
};

const deleteSingleStafeIntoDB = async (id: string | number) => {
  const result = await StafeModel.findByIdAndDelete(id);
  return result;
};

const updateSingleByPatchStafeIntoDB = async (
  id: string | number,
  info: object,
) => {
  const result = await StafeModel.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  return result;
};

const updateSingleByPutStafeIntoDB = async (
  id: string | number,
  info: object,
) => {
  const result = await StafeModel.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  return result;
};

const StafeDB = {
  createStafeIntoDB,
  getAllStafeIntoDB,
  getSingleStafeIntoDB,
  deleteSingleStafeIntoDB,
  updateSingleByPatchStafeIntoDB,
  updateSingleByPutStafeIntoDB,
};
export default StafeDB;
