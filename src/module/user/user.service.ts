import { userInterface } from './user.interface';
import userModel from './user.model';

const createUserIntoDB = async (payload: userInterface) => {
  const result = await userModel.create(payload);
  return result;
};

const getAllUserIntoDB = async () => {
  const result = await userModel.find();
  return result;
};

const getSingleUserIntoDB = async (id: string | number) => {
  const result = await userModel.findById(id);

  return result;
};

const deleteSingleUserIntoDB = async (id: string | number) => {
  const result = await userModel.findByIdAndDelete(id);
  return result;
};

const updateSingleByPatchUserIntoDB = async (
  id: string | number,
  info: object,
) => {
  const result = await userModel.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  return result;
};

const updateSingleByPutUserIntoDB = async (
  id: string | number,
  info: object,
) => {
  const result = await userModel.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  return result;
};

const UserDB = {
  createUserIntoDB,
  getAllUserIntoDB,
  getSingleUserIntoDB,
  deleteSingleUserIntoDB,
  updateSingleByPatchUserIntoDB,
  updateSingleByPutUserIntoDB,
};
export default UserDB;
