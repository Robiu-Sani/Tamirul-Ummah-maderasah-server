import { consultingInterface } from './consulting.interface';
import consoltModel from './consulting.model';

const createConsultIntoDB = async (payload: consultingInterface) => {
  const result = await consoltModel.create(payload);
  return result;
};

const consultDB = {
  createConsultIntoDB,
};
export default consultDB;
