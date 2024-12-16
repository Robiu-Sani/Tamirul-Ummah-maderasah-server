import { MotherInformation } from './mother.interface';
import MotherModel from './mother.model';

const createMotherIntoDB = async (payload: MotherInformation) => {
  const result = await MotherModel.create(payload);
  return result;
};

const getAllMotherIntoDB = async () => {
  const result = await MotherModel.find().populate('studentId');
  return result;
};

const getSingleMotherIntoDB = async (id: string | number) => {
  const result = await MotherModel.findById(id).populate('studentId');
  return result;
};

const deleteSingleMotherIntoDB = async (id: string | number) => {
  const result = await MotherModel.findByIdAndDelete(id);
  return result;
};

const updateSingleByPatchMotherIntoDB = async (
  id: string | number,
  info: object,
) => {
  const result = await MotherModel.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  return result;
};

const updateSingleByPutMotherIntoDB = async (
  id: string | number,
  info: object,
) => {
  const result = await MotherModel.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  return result;
};

const MotherDB = {
  createMotherIntoDB,
  getAllMotherIntoDB,
  getSingleMotherIntoDB,
  deleteSingleMotherIntoDB,
  updateSingleByPatchMotherIntoDB,
  updateSingleByPutMotherIntoDB,
};
export default MotherDB;
