import { FeeDetails } from './fee.interface';
import FeeModel from './fee.model';

const createFeeIntoDB = async (payload: FeeDetails) => {
  const result = await FeeModel.create(payload);
  return result;
};

const getAllFeeIntoDB = async () => {
  const result = await FeeModel.find();
  return result;
};

const getSingleFeeIntoDB = async (id: string | number) => {
  const result = await FeeModel.findById(id);
  return result;
};

const deleteSingleFeeIntoDB = async (id: string | number) => {
  const result = await FeeModel.findByIdAndDelete(id);
  return result;
};

const updateSingleByPatchFeeIntoDB = async (
  id: string | number,
  info: object,
) => {
  const result = await FeeModel.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  return result;
};

const updateSingleByPutFeeIntoDB = async (
  id: string | number,
  info: object,
) => {
  const result = await FeeModel.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  return result;
};

const FeeDB = {
  createFeeIntoDB,
  getAllFeeIntoDB,
  getSingleFeeIntoDB,
  deleteSingleFeeIntoDB,
  updateSingleByPatchFeeIntoDB,
  updateSingleByPutFeeIntoDB,
};
export default FeeDB;
