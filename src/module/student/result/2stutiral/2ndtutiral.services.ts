import mongoose from 'mongoose';
import { ExamInterface } from '../result.interface';
import examSchema from '../result.model';

const SecendTutiralModel = mongoose.model('secend-tutiral', examSchema);

const createSecendTutiralIntoDB = async (payload: ExamInterface) => {
  const result = await SecendTutiralModel.create(payload);
  return result;
};

const getAllSecendTutiralIntoDB = async () => {
  const result = await SecendTutiralModel.find().populate('studentId');
  return result;
};

const getSingleSecendTutiralIntoDB = async (id: string | number) => {
  const result = await SecendTutiralModel.findById(id).populate('studentId');

  return result;
};

const deleteSingleSecendTutiralIntoDB = async (id: string | number) => {
  const result = await SecendTutiralModel.findByIdAndDelete(id);
  return result;
};

const updateSingleByPatchSecendTutiralIntoDB = async (
  id: string | number,
  info: object,
) => {
  const result = await SecendTutiralModel.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  return result;
};

const updateSingleByPutSecendTutiralIntoDB = async (
  id: string | number,
  info: object,
) => {
  const result = await SecendTutiralModel.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  return result;
};

const SecendTutiralDB = {
  createSecendTutiralIntoDB,
  getAllSecendTutiralIntoDB,
  getSingleSecendTutiralIntoDB,
  deleteSingleSecendTutiralIntoDB,
  updateSingleByPatchSecendTutiralIntoDB,
  updateSingleByPutSecendTutiralIntoDB,
};
export default SecendTutiralDB;
