import { NotifectionInterface } from './notifection.interface';
import NotifectionModel from './notifection.model';

const createNotifectionIntoDB = async (payload: NotifectionInterface) => {
  const result = await NotifectionModel.create(payload);
  return result;
};

const getAllNotifectionIntoDB = async () => {
  const result = await NotifectionModel.find();
  return result;
};

const getSingleNotifectionIntoDB = async (id: string | number) => {
  const result = await NotifectionModel.findById(id);
  return result;
};

const deleteSingleNotifectionIntoDB = async (id: string | number) => {
  const result = await NotifectionModel.findByIdAndDelete(id);
  return result;
};

const updateSingleByPatchNotifectionIntoDB = async (
  id: string | number,
  info: object,
) => {
  const result = await NotifectionModel.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  const count = await NotifectionModel.find({
    isClick: true,
  }).countDocuments();
  return { result, count: count };
};

const updateSingleByPutNotifectionIntoDB = async (
  id: string | number,
  info: object,
) => {
  const result = await NotifectionModel.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  return result;
};

const noticectionAlertDB = async () => {
  const result = await NotifectionModel.find({
    isClick: true,
  }).countDocuments();
  return result;
};

const noticectionAdmitionDB = async (cetagory: string) => {
  const result = await NotifectionModel.find({
    name: cetagory,
  });
  return result;
};

const noticectionBoxIntoDB = async () => {
  const result = await NotifectionModel.find()
    .select('name messages path isClick')
    .sort({ _id: -1 });
  return result;
};

const NotifectionDB = {
  createNotifectionIntoDB,
  getAllNotifectionIntoDB,
  getSingleNotifectionIntoDB,
  noticectionAlertDB,
  deleteSingleNotifectionIntoDB,
  updateSingleByPatchNotifectionIntoDB,
  updateSingleByPutNotifectionIntoDB,
  noticectionBoxIntoDB,
  noticectionAdmitionDB,
};
export default NotifectionDB;
