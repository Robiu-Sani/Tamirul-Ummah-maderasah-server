import consoltModel from '../consulting/consulting.model';
import StudentModel from '../student/student.model';
import TeacherModel from '../teacher/teacher.model';
import { AboutInterface } from './about.interface';
import AboutModel from './about.model';

const createAboutIntoDB = async (payload: AboutInterface) => {
  const result = await AboutModel.create(payload);
  return result;
};

const getAllAboutIntoDB = async () => {
  const result = await AboutModel.find();
  return result;
};

const getSingleAboutIntoDB = async (id: string | number) => {
  const result = await AboutModel.findById(id);

  return result;
};

const deleteSingleAboutIntoDB = async (id: string | number) => {
  const result = await AboutModel.findByIdAndDelete(id);
  return result;
};

const updateSingleByPatchAboutIntoDB = async (
  id: string | number,
  info: object,
) => {
  const result = await AboutModel.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  return result;
};

const updateSingleByPutAboutIntoDB = async (
  id: string | number,
  info: object,
) => {
  const result = await AboutModel.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  return result;
};

const bannerInfo = async () => {
  const totalUser = await StudentModel.countDocuments();
  const totalStudent = await StudentModel.countDocuments({ isRunning: true });
  const totalTeacher = await TeacherModel.countDocuments();
  const totalMessage = await consoltModel.countDocuments();
  const classes = await StudentModel.aggregate([
    {
      $match: { isRunning: true },
    },
    {
      $group: {
        _id: '$class',
        totalStudents: { $sum: 1 },
        boys: { $sum: { $cond: [{ $eq: ['$gender', 'male'] }, 1, 0] } },
        girls: { $sum: { $cond: [{ $eq: ['$gender', 'female'] }, 1, 0] } },
      },
    },
    {
      $project: {
        className: '$_id',
        _id: 0,
        totalStudents: 1,
        boys: 1,
        girls: 1,
      },
    },
  ]);

  const shifts = await TeacherModel.aggregate([
    {
      $group: {
        _id: '$shift', // Group by shift
        totalTeachers: { $sum: 1 }, // Total teachers in each shift
      },
    },
    {
      $project: {
        shiftName: '$_id',
        _id: 0,
        totalTeachers: 1,
      },
    },
  ]);

  // Group data by residentialStatus
  const residentialStatuses = await TeacherModel.aggregate([
    {
      $group: {
        _id: '$residentialStatus', // Group by residentialStatus
        totalTeachers: { $sum: 1 }, // Total teachers in each residentialStatus
      },
    },
    {
      $project: {
        residentialStatus: '$_id',
        _id: 0,
        totalTeachers: 1,
      },
    },
  ]);

  const data = {
    totalUser,
    totalStudent,
    totalTeacher,
    totalMessage,
    classes,
    shifts,
    residentialStatuses,
  };
  return data;
};

const AboutDB = {
  createAboutIntoDB,
  getAllAboutIntoDB,
  getSingleAboutIntoDB,
  deleteSingleAboutIntoDB,
  updateSingleByPatchAboutIntoDB,
  updateSingleByPutAboutIntoDB,
  bannerInfo,
};
export default AboutDB;
