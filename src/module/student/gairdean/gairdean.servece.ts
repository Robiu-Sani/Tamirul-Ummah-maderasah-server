import { GairdeanInformation } from './gairdean.interface';
import GairdeanModel from './gairdean.model';

const createGairdeanIntoDB = async (payload: GairdeanInformation) => {
  const result = await GairdeanModel.create(payload);
  return result;
};

const getAllGairdeanIntoDB = async () => {
  const result = await GairdeanModel.find();
  return result;
};

const getSingleGairdeanIntoDB = async (id: string | number) => {
  const result = await GairdeanModel.findById(id);
  return result;
};

const deleteSingleGairdeanIntoDB = async (id: string | number) => {
  const result = await GairdeanModel.findByIdAndDelete(id);
  return result;
};

const updateSingleByPatchGairdeanIntoDB = async (
  id: string | number,
  info: object,
) => {
  const result = await GairdeanModel.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  return result;
};

const updateSingleByPutGairdeanIntoDB = async (
  id: string | number,
  info: object,
) => {
  const result = await GairdeanModel.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  return result;
};

const GairdeanDB = {
  createGairdeanIntoDB,
  getAllGairdeanIntoDB,
  getSingleGairdeanIntoDB,
  deleteSingleGairdeanIntoDB,
  updateSingleByPatchGairdeanIntoDB,
  updateSingleByPutGairdeanIntoDB,
};
export default GairdeanDB;
