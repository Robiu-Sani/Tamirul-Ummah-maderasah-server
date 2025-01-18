import { PostDetails } from './post.interface';
import PostModel from './post.model';

const createPostIntoDB = async (payload: PostDetails) => {
  const result = await PostModel.create(payload);
  return result;
};

const getAllPostIntoDB = async () => {
  const result = await PostModel.find().populate('studentID').sort({ _id: -1 }); // Sort by _id in descending order
  return result;
};

const getPostTableData = async ({
  search = '',
  selectFilter = undefined,
  skip,
  limit = 50,
}: {
  search?: string;
  selectFilter?: string;
  skip: number;
  limit?: number;
}) => {
  const totalPosts = await PostModel.countDocuments();
  const selectedPosts = await PostModel.countDocuments({ isSelected: true });

  // Build query
  const query: Record<string, unknown> = {};
  if (search) {
    query.$or = [
      { postTitle: { $regex: search, $options: 'i' } }, // Search in postTitle
      { 'studentID.studentNameEnglish': { $regex: search, $options: 'i' } }, // Search in studentNameEnglish
    ];
  }
  if (selectFilter) {
    query.isSelected = selectFilter === 'true';
  }

  const data = await PostModel.find(query)
    .populate({
      path: 'studentID',
      select: 'studentNameEnglish', // Select only the required fields to avoid overpopulation
    })
    .select('studentID createdAt postTitle postDescription isSelected') // Select specific fields for posts
    .limit(limit)
    .skip(skip)
    .lean(); // Use lean for better performance with read-only data

  return {
    totalPosts,
    selectedPosts,
    data,
  };
};

const getSinglePostIntoDB = async (id: string | number) => {
  const result = await PostModel.findById(id).populate('studentID');
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
  getPostTableData,
};
export default PostDB;
