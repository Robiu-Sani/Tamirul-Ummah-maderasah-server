import SubjectModel from './subject.model';
import { ISubject } from './subject.interface';

export const createSubject = async (data: ISubject) => {
  return await SubjectModel.create(data);
};

export const getAllSubjects = async () => {
  return await SubjectModel.find({ isDeleted: false });
};

export const getSubjectById = async (id: string) => {
  return await SubjectModel.findOne({ _id: id, isDeleted: false });
};

export const updateSubject = async (id: string, data: Partial<ISubject>) => {
  return await SubjectModel.findOneAndUpdate(
    { _id: id, isDeleted: false },
    data,
    { new: true },
  );
};

export const softDeleteSubject = async (id: string) => {
  return await SubjectModel.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );
};
