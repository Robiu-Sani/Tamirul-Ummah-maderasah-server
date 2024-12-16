import { PostDetails } from './post.interface';
import PostModel from './post.model';

const createPostIntoDB = async (payload: PostDetails) => {
  const result = await PostModel.create(payload);
  return result;
};

const getAllPostIntoDB = async () => {
  const result = await PostModel.find();
  return result;
};

const getSinglePostIntoDB = async (id: string | number) => {
  const result = await PostModel.findById(id);
  return result;
};

const deleteSinglePostIntoDB = async (id: string | number) => {
  const result = await PostModel.findByIdAndDelete(id);
  return result;
};

const updateSingleByPatchPostIntoDB = async (
  id: string | number,
  info: object,
) => {
  const result = await PostModel.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  return result;
};

const updateSingleByPutPostIntoDB = async (
  id: string | number,
  info: object,
) => {
  const result = await PostModel.findByIdAndUpdate(
    id,
    { $set: info },
    { new: true },
  );
  return result;
};

const PostDB = {
  createPostIntoDB,
  getAllPostIntoDB,
  getSinglePostIntoDB,
  deleteSinglePostIntoDB,
  updateSingleByPatchPostIntoDB,
  updateSingleByPutPostIntoDB,
};
export default PostDB;
