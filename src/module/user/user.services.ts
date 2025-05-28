import UserModel from './user.model';
import { UserInfo } from './user.interface';

export const createUser = async (user: UserInfo) => {
  const newUser = await UserModel.create(user);
  return newUser;
};

export const getUserById = async (id: string) => {
  const user = await UserModel.findOne({ id, isDeleted: false });
  return user;
};

export const getByMongooseId = async (id: string) => {
  // Fixed casing to camelCase
  const user = await UserModel.findById(id);
  return user;
};

export const updateUser = async (id: string, userData: Partial<UserInfo>) => {
  const updatedUser = await UserModel.findOneAndUpdate(
    { id, isDeleted: false }, // Added isDeleted check
    userData,
    {
      new: true,
      runValidators: true,
    },
  );
  return updatedUser;
};

export const deleteUser = async (id: string) => {
  const deletedUser = await UserModel.findOneAndUpdate(
    { id, isDeleted: false }, // Added isDeleted check
    { isDeleted: true },
    { new: true },
  );
  return deletedUser;
};

export const getAllUsers = async () => {
  const users = await UserModel.find({ isDeleted: false });
  return users;
};

export const getUserByRole = async (
  role: 'admin' | 'teacher' | 'student' | 'parent',
): Promise<UserInfo[]> => {
  const users = await UserModel.find({ role, isDeleted: false });
  return users;
};

export const getUserByName = async (name: string) => {
  const users = await UserModel.find({
    name: { $regex: name, $options: 'i' },
    isDeleted: false,
  });
  return users;
};

export const hardDeleteUser = async (id: string) => {
  const deletedUser = await UserModel.findOneAndDelete({ id });
  return deletedUser;
};
