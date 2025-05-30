import { ObjectId } from 'mongoose';
import { ExamInterface } from './result.interface';
import resultModel from './result.model';

const createResultsIntoDB = async (payload: ExamInterface) => {
  const existingResult = await resultModel.findOne({
    studentId: payload.studentId,
    examName: payload.examName,
  });

  if (existingResult) {
    return { status: false };
  }

  const result = await resultModel.create(payload);
  const data = {
    result,
    status: true,
  };
  return data;
};

const getAllResultIntoDB = async (skip: number) => {
  const result = await resultModel
    .find()
    .populate('studentId')
    .populate('teacherId')
    .skip(skip)
    .limit(50);

  return result;
};

const getResultTableDataIntoDB = async (
  skip: number,
  search?: string,
  studentClass?: string,
) => {
  const query: Record<string, unknown> = {};
  if (search) query.studentName = { $regex: search, $options: 'i' };
  if (studentClass) query.studentClass = studentClass;

  const data = await resultModel
    .find(query)
    .skip(skip)
    .limit(100)
    .select('studentName studentClass studentGender total examName');

  const stats = await resultModel.aggregate([
    {
      $facet: {
        totalMale: [{ $match: { studentGender: 'male' } }, { $count: 'count' }],
        totalFemale: [
          { $match: { studentGender: 'female' } },
          { $count: 'count' },
        ],
        uniqueClasses: [{ $group: { _id: '$studentClass' } }],
      },
    },
  ]);

  const totalMale = stats[0]?.totalMale[0]?.count || 0;
  const totalFemale = stats[0]?.totalFemale[0]?.count || 0;
  const uniqueClasses =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    stats[0]?.uniqueClasses.map((cls: any) => cls._id) || [];

  return {
    totalMale,
    totalFemale,
    totalStudents: totalMale + totalFemale,
    totalClass: uniqueClasses.length,
    uniqueClasses,
    data,
  };
};

const getSingleResultIntoDB = async (id: string | number) => {
  const result = await resultModel
    .findById(id)
    .populate('studentId')
    .populate('teacherId');
  return result;
};

const getOnlySubjectsNumbersIntoDB = async (id: ObjectId, exam: string) => {
  const result = resultModel
    .findOne({ studentId: id, examName: exam })
    .select('subjects');
  return result;
};

const getResultByTeachersId = async (
  id: string | number,
  skip: number,
  search?: string,
  studentClass?: string,
) => {
  const query: Record<string, unknown> = { teacherId: id };
  if (search) query.studentName = { $regex: search, $options: 'i' };
  if (studentClass) query.studentClass = studentClass;

  const data = await resultModel
    .find(query)
    .skip(skip)
    .limit(100)
    .select('studentName studentClass studentGender teacherId total examName');

  const totalMale = await resultModel
    .find(query)
    .countDocuments({ studentGender: 'male' });
  const totalFemale = await resultModel
    .find(query)
    .countDocuments({ studentGender: 'female' });
  const uniqueClasses = await resultModel.find(query).distinct('studentClass');

  return {
    totalMale,
    totalFemale,
    totalStudents: totalMale + totalFemale,
    totalClass: uniqueClasses.length,
    uniqueClasses,
    data,
  };
};

const getResultByExamName = async (
  exam: string | number,
  skip: number,
  search?: string,
  studentClass?: string,
) => {
  const query: Record<string, unknown> = { examName: exam };
  if (search) query.studentName = { $regex: search, $options: 'i' };
  if (studentClass) query.studentClass = studentClass;

  const data = await resultModel
    .find(query)
    .skip(skip)
    .limit(100)
    .select('studentName studentClass studentGender total examName');

  const stats = await resultModel.aggregate([
    { $match: { examName: exam } },
    {
      $facet: {
        totalMale: [{ $match: { studentGender: 'male' } }, { $count: 'count' }],
        totalFemale: [
          { $match: { studentGender: 'female' } },
          { $count: 'count' },
        ],
        uniqueClasses: [{ $group: { _id: '$studentClass' } }],
      },
    },
  ]);

  const totalMale = stats[0]?.totalMale[0]?.count || 0;
  const totalFemale = stats[0]?.totalFemale[0]?.count || 0;
  const uniqueClasses =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    stats[0]?.uniqueClasses.map((cls: any) => cls._id) || [];

  return {
    totalMale,
    totalFemale,
    totalStudents: totalMale + totalFemale,
    totalClass: uniqueClasses.length,
    uniqueClasses,
    data,
  };
};

const deleteResultIntoDB = async (id: string | number) => {
  const result = resultModel.findByIdAndDelete(id);
  return result;
};

const UpdateResultIntoDB = async (id: string | number, info: object) => {
  const result = await resultModel.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  return result;
};

export const resultDB = {
  createResultsIntoDB,
  getAllResultIntoDB,
  getResultTableDataIntoDB,
  getSingleResultIntoDB,
  getOnlySubjectsNumbersIntoDB,
  deleteResultIntoDB,
  getResultByTeachersId,
  getResultByExamName,
  UpdateResultIntoDB,
};

// separate data to delete data
import cron from 'node-cron';

// Function to delete data on 1st February every year
const scheduleAnnualDeletion = () => {
  // Schedule the task to run at midnight on February 1st every year
  cron.schedule('0 0 1 2 *', async () => {
    try {
      console.log('Running scheduled job to delete old data...');

      // Delete all data from the results collection
      const result = await resultModel.deleteMany({});
      console.log(`Deleted ${result.deletedCount} records successfully.`);
    } catch (error) {
      console.error('Error occurred while deleting data:', error);
    }
  });
};

// Call the function to schedule the job
scheduleAnnualDeletion();
