import mongoose from 'mongoose';
import { ExamInterface } from '../result.interface';
import examSchema from '../result.model';

const FristSamisterModel = mongoose.model('first-samister', examSchema);

const createFirstSamisterIntoDB = async (payload: ExamInterface) => {
  const result = await FristSamisterModel.create(payload);
  return result;
};

const getAllFirstSamisterIntoDB = async () => {
  const result = await FristSamisterModel.find();
  return result;
};

const getSingleFirstSamisterIntoDB = async (id: string | number) => {
  const result = await FristSamisterModel.findById(id);

  return result;
};

const deleteSingleFirstSamisterIntoDB = async (id: string | number) => {
  const result = await FristSamisterModel.findByIdAndDelete(id);
  return result;
};

const updateSingleByPatchFirstSamisterIntoDB = async (
  id: string | number,
  info: object,
) => {
  const result = await FristSamisterModel.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  return result;
};

const updateSingleByPutFirstSamisterIntoDB = async (
  id: string | number,
  info: object,
) => {
  const result = await FristSamisterModel.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  return result;
};

const FirstSamisterDB = {
  createFirstSamisterIntoDB,
  getAllFirstSamisterIntoDB,
  getSingleFirstSamisterIntoDB,
  deleteSingleFirstSamisterIntoDB,
  updateSingleByPatchFirstSamisterIntoDB,
  updateSingleByPutFirstSamisterIntoDB,
};
export default FirstSamisterDB;
