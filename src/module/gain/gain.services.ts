import { gainInterface } from './gain.interface';
import gainModel from './gain.model';

const createGainIntoDB = async (payload: gainInterface) => {
  const result = await gainModel.create(payload);
  return result;
};

const getAllGainIntoDB = async () => {
  const result = await gainModel.find().sort({ _id: -1 });
  return result;
};

const updateGainIntoDB = async (
  payload: gainInterface,
  id: string | number,
) => {
  const result = await gainModel.findByIdAndUpdate(
    id,
    { $set: payload },
    { new: true },
  );
  return result;
};

const deleteGainIntoDB = async (id: string | number) => {
  const result = await gainModel.findOneAndDelete({ id });
  return result;
};

const gainDB = {
  createGainIntoDB,
  getAllGainIntoDB,
  updateGainIntoDB,
  deleteGainIntoDB,
};

export default gainDB;
