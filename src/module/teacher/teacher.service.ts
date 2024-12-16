import { TeacherDetails } from './teacher.interface';
import TeacherModel from './teacher.model';

const createTeacherIntoDB = async (payload: TeacherDetails) => {
  const result = await TeacherModel.create(payload);
  return result;
};

const getAllTeacherIntoDB = async () => {
  const result = await TeacherModel.find();
  return result;
};

const getSingleTeacherIntoDB = async (id: string | number) => {
  const result = await TeacherModel.findById(id);

  return result;
};

const deleteSingleTeacherIntoDB = async (id: string | number) => {
  const result = await TeacherModel.findByIdAndDelete(id);
  return result;
};

const updateSingleByPatchTeacherIntoDB = async (
  id: string | number,
  info: object,
) => {
  const result = await TeacherModel.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  return result;
};

const updateSingleByPutTeacherIntoDB = async (
  id: string | number,
  info: object,
) => {
  const result = await TeacherModel.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  return result;
};

const TeacherDB = {
  createTeacherIntoDB,
  getAllTeacherIntoDB,
  getSingleTeacherIntoDB,
  deleteSingleTeacherIntoDB,
  updateSingleByPatchTeacherIntoDB,
  updateSingleByPutTeacherIntoDB,
};
export default TeacherDB;
