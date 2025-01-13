import { NoticeInterface } from './notice.interface';
import noticeModel from './notice.model';

const createNoticeIntoDB = async (payload: NoticeInterface) => {
  const result = await noticeModel.create(payload);
  return result;
};

const getAllNoticeIntoDB = async () => {
  const result = await noticeModel.find();
  return result;
};

const getBannerNoticeIntoDB = async () => {
  const result = await noticeModel
    .find()
    .sort({ _id: -1 }) // Sort in descending order (latest first)
    .limit(4) // Limit to 4 documents
    .select('title submissionDate'); // Select only `title` and `submissionDate`
  return result;
};

const getSingleNoticeIntoDB = async (id: string | number) => {
  const result = await noticeModel.findById(id);
  return result;
};

const deleteSingleNoticeIntoDB = async (id: string | number) => {
  const result = await noticeModel.findByIdAndDelete(id);
  return result;
};

const updateSingleByPatchNoticeIntoDB = async (
  id: string | number,
  info: object,
) => {
  const result = await noticeModel.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  return result;
};

const updateSingleByPutNoticeIntoDB = async (
  id: string | number,
  info: object,
) => {
  const result = await noticeModel.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  return result;
};

const noticeDB = {
  createNoticeIntoDB,
  getAllNoticeIntoDB,
  getSingleNoticeIntoDB,
  getBannerNoticeIntoDB,
  deleteSingleNoticeIntoDB,
  updateSingleByPatchNoticeIntoDB,
  updateSingleByPutNoticeIntoDB,
};
export default noticeDB;
