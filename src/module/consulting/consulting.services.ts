import { consultingInterface } from './consulting.interface';
import consoltModel from './consulting.model';

const createConsultIntoDB = async (payload: consultingInterface) => {
  const result = await consoltModel.create(payload);
  return result;
};

const getConsultIntoDB = async () => {
  const result = await consoltModel.find();
  return result;
};

const deleteConsultIntoDB = async (id: string | number) => {
  const result = consoltModel.findByIdAndDelete(id);
  return result;
};

const messagesCategoryDB = async (cetagory: string) => {
  const result = await consoltModel
    .find({
      type: cetagory,
    })
    .sort({ _id: -1 });
  return result;
};

const consultDB = {
  createConsultIntoDB,
  getConsultIntoDB,
  deleteConsultIntoDB,
  messagesCategoryDB,
};
export default consultDB;
