import ClassModel from './class.model';
import { IClass } from './class.interface';

// Create class
export const createClass = async (data: IClass) => {
  return await ClassModel.create(data);
};

// Get all non-deleted classes
export const getAllClasses = async () => {
  return await ClassModel.find({ isDeleted: false });
};

// Get a single class by ID (if not deleted)
export const getClassById = async (id: string) => {
  return await ClassModel.findOne({ _id: id, isDeleted: false });
};

// Update class
export const updateClass = async (id: string, data: Partial<IClass>) => {
  return await ClassModel.findOneAndUpdate(
    { _id: id, isDeleted: false },
    data,
    { new: true },
  );
};

// Soft delete class
export const softDeleteClass = async (id: string) => {
  return await ClassModel.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );
};
