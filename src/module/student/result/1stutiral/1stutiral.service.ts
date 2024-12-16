import mongoose from 'mongoose';
import { ExamInterface } from '../result.interface';
import examSchema from '../result.model';

const FristTutiralModel = mongoose.model('first-tutiral', examSchema);

const createFirstTutiralIntoDB = async (payload: ExamInterface) => {
  const result = await FristTutiralModel.create(payload);
  return result;
};

const getAllFirstTutiralIntoDB = async () => {
  const result = await FristTutiralModel.find().populate('studentId');
  return result;
};

const getSingleFirstTutiralIntoDB = async (id: string | number) => {
  const result = await FristTutiralModel.findById(id).populate('studentId');

  return result;
};

const deleteSingleFirstTutiralIntoDB = async (id: string | number) => {
  const result = await FristTutiralModel.findByIdAndDelete(id);
  return result;
};

const updateSingleByPatchFirstTutiralIntoDB = async (
  id: string | number,
  info: object,
) => {
  const result = await FristTutiralModel.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  return result;
};

const updateSingleByPutFirstTutiralIntoDB = async (
  id: string | number,
  info: object,
) => {
  const result = await FristTutiralModel.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  return result;
};

const FirstTutiralDB = {
  createFirstTutiralIntoDB,
  getAllFirstTutiralIntoDB,
  getSingleFirstTutiralIntoDB,
  deleteSingleFirstTutiralIntoDB,
  updateSingleByPatchFirstTutiralIntoDB,
  updateSingleByPutFirstTutiralIntoDB,
};
export default FirstTutiralDB;
