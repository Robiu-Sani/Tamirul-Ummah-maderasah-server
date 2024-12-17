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
  return result;
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

const NotifectionDB = {
  createNotifectionIntoDB,
  getAllNotifectionIntoDB,
  getSingleNotifectionIntoDB,
  deleteSingleNotifectionIntoDB,
  updateSingleByPatchNotifectionIntoDB,
  updateSingleByPutNotifectionIntoDB,
};
export default NotifectionDB;
