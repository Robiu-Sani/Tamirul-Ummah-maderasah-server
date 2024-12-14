import { InstitutionData } from './contact.interface';
import InstitutionModel from './contact.model';

const createInstitutionIntoDB = async (payload: InstitutionData) => {
  const result = await InstitutionModel.create(payload);
  return result;
};

const getAllInstitutionIntoDB = async () => {
  const result = await InstitutionModel.find();
  return result;
};

const getSingleInstitutionIntoDB = async (id: string | number) => {
  const result = await InstitutionModel.findById(id);
  return result;
};

const deleteSingleInstitutionIntoDB = async (id: string | number) => {
  const result = await InstitutionModel.findByIdAndDelete(id);
  return result;
};

const updateSingleByPatchInstitutionIntoDB = async (
  id: string | number,
  info: object,
) => {
  const result = await InstitutionModel.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  return result;
};

const updateSingleByPutInstitutionIntoDB = async (
  id: string | number,
  info: object,
) => {
  const result = await InstitutionModel.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  return result;
};

const InstitutionDB = {
  createInstitutionIntoDB,
  getAllInstitutionIntoDB,
  getSingleInstitutionIntoDB,
  deleteSingleInstitutionIntoDB,
  updateSingleByPatchInstitutionIntoDB,
  updateSingleByPutInstitutionIntoDB,
};
export default InstitutionDB;
