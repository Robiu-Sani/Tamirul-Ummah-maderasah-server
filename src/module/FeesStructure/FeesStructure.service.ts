import { FeesStructure } from './FeesStructure.interface';
import FeesStructureModel from './FeesStructure.model';

const createFeesStructureIntoDB = async (payload: FeesStructure) => {
  const result = await FeesStructureModel.create(payload);
  return result;
};

const getAllFeesStructureIntoDB = async () => {
  const result = await FeesStructureModel.find();
  return result;
};

const getSingleFeesStructureIntoDB = async (id: string | number) => {
  const result = await FeesStructureModel.findOne({ FeesStructureId: id });
  return result;
};

const deleteSingleFeesStructureIntoDB = async (id: string | number) => {
  const result = await FeesStructureModel.findByIdAndDelete(id);
  return result;
};

const updateSingleByPatchFeesStructureIntoDB = async (
  id: string | number,
  info: object,
) => {
  const result = await FeesStructureModel.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  return result;
};

const updateSingleByPutFeesStructureIntoDB = async (
  id: string | number,
  info: object,
) => {
  const result = await FeesStructureModel.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  return result;
};

const FeesStructureDB = {
  createFeesStructureIntoDB,
  getAllFeesStructureIntoDB,
  getSingleFeesStructureIntoDB,
  deleteSingleFeesStructureIntoDB,
  updateSingleByPatchFeesStructureIntoDB,
  updateSingleByPutFeesStructureIntoDB,
};
export default FeesStructureDB;
