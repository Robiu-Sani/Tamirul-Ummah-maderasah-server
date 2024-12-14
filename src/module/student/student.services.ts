import { StudentInfo } from './student.interface';
import StudentModel from './student.model';

const createStudentIntoDB = async (payload: StudentInfo) => {
  const result = await StudentModel.create(payload);
  return result;
};

const getAllStudentIntoDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudentIntoDB = async (id: string | number) => {
  const result = await StudentModel.findById(id);
  return result;
};

const deleteSingleStudentIntoDB = async (id: string | number) => {
  const result = await StudentModel.findByIdAndDelete(id);
  return result;
};

const updateSingleByPatchStudentIntoDB = async (
  id: string | number,
  info: object,
) => {
  const result = await StudentModel.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  return result;
};

const updateSingleByPutStudentIntoDB = async (
  id: string | number,
  info: object,
) => {
  const result = await StudentModel.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  return result;
};

const StudentDB = {
  createStudentIntoDB,
  getAllStudentIntoDB,
  getSingleStudentIntoDB,
  deleteSingleStudentIntoDB,
  updateSingleByPatchStudentIntoDB,
  updateSingleByPutStudentIntoDB,
};
export default StudentDB;
