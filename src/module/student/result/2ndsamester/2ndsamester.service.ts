import mongoose from 'mongoose';
import { ExamInterface } from '../result.interface';
import examSchema from '../result.model';

export const SecendSamisterModel = mongoose.model(
  'secend-Samister',
  examSchema,
);

const createSecendSamisterIntoDB = async (payload: ExamInterface) => {
  const result = await SecendSamisterModel.create(payload);
  return result;
};

const getAllSecendSamisterIntoDB = async () => {
  const result = await SecendSamisterModel.find().populate('studentId');
  return result;
};

const getSingleSecendSamisterIntoDB = async (id: string | number) => {
  const result = await SecendSamisterModel.findById(id).populate('studentId');

  return result;
};

const deleteSingleSecendSamisterIntoDB = async (id: string | number) => {
  const result = await SecendSamisterModel.findByIdAndDelete(id);
  return result;
};

const updateSingleByPatchSecendSamisterIntoDB = async (
  id: string | number,
  info: object,
) => {
  const result = await SecendSamisterModel.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  return result;
};

const updateSingleByPutSecendSamisterIntoDB = async (
  id: string | number,
  info: object,
) => {
  const result = await SecendSamisterModel.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  return result;
};

const SecendSamisterDB = {
  createSecendSamisterIntoDB,
  getAllSecendSamisterIntoDB,
  getSingleSecendSamisterIntoDB,
  deleteSingleSecendSamisterIntoDB,
  updateSingleByPatchSecendSamisterIntoDB,
  updateSingleByPutSecendSamisterIntoDB,
};
export default SecendSamisterDB;
