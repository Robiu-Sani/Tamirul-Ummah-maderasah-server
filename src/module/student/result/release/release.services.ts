import { releaseInterface } from './release.interface';
import ReleaseModel from './release.model';

const createReleaseDateIntoDB = async (payload: releaseInterface) => {
  const result = await ReleaseModel.create(payload);
  return result;
};

const getReleaseIntoDB = async () => {
  const result = await ReleaseModel.find();
  return result;
};

const UpdateReleaseIntoDB = async (id: string | number, info: object) => {
  const result = await ReleaseModel.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  return result;
};

const releaseDB = {
  createReleaseDateIntoDB,
  getReleaseIntoDB,
  UpdateReleaseIntoDB,
};
export default releaseDB;
