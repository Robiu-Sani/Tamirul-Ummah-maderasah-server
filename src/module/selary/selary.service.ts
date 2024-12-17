import { selaryInterface } from './selary.interface';
import SelaryModel from './selary.model';

const createSelaryIntoDB = async (payload: selaryInterface) => {
  const result = await SelaryModel.create(payload);
  return result;
};

const getAllSelaryIntoDB = async () => {
  const result = await SelaryModel.find().populate('studentId');
  return result;
};

const getSingleSelaryIntoDB = async (id: string | number) => {
  const result = await SelaryModel.findById(id).populate('studentId');
  return result;
};

const deleteSingleSelaryIntoDB = async (id: string | number) => {
  const result = await SelaryModel.findByIdAndDelete(id);
  return result;
};

const updateSingleByPatchSelaryIntoDB = async (
  id: string | number,
  info: object,
) => {
  const result = await SelaryModel.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  return result;
};

const updateSingleByPutSelaryIntoDB = async (
  id: string | number,
  info: object,
) => {
  const result = await SelaryModel.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  return result;
};

const SelaryDB = {
  createSelaryIntoDB,
  getAllSelaryIntoDB,
  getSingleSelaryIntoDB,
  deleteSingleSelaryIntoDB,
  updateSingleByPatchSelaryIntoDB,
  updateSingleByPutSelaryIntoDB,
};
export default SelaryDB;
