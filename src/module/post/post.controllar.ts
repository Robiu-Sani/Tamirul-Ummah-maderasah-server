import { Request, Response } from 'express';
import PostDB from './post.service';

const createPost = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const data = await PostDB.createPostIntoDB(payload);
    res.json({
      status: true,
      message: 'Post is posted successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Post is not created successfully',
      error,
    });
  }
};

const getAllPost = async (req: Request, res: Response) => {
  try {
    const data = await PostDB.getAllPostIntoDB();
    res.json({
      status: true,
      message: 'All Post got successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Post is not get successfully',
      error,
    });
  }
};

const getSinglePost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await PostDB.getSinglePostIntoDB(id);
    res.json({
      status: true,
      message: 'Single Post got successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single Post is not get successfully',
      error,
    });
  }
};

const deleteSinglePost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await PostDB.deleteSinglePostIntoDB(id);
    res.json({
      status: true,
      message: 'Single Post delete successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single Post is not delete successfully',
      error,
    });
  }
};

const updateSingleByPatchPost = async (req: Request, res: Response) => {
  try {
    const payload = req.body;

    const { id } = req.params;
    const data = await PostDB.updateSingleByPatchPostIntoDB(id, payload);
    res.json({
      status: true,
      message: 'Single Post update successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single Post is not update successfully',
      error,
    });
  }
};

const updateSingleByPutPost = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const { id } = req.params;
    const data = await PostDB.updateSingleByPutPostIntoDB(id, payload);
    res.json({
      status: true,
      message: 'Single Post update successfully',
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Single Post is not update successfully',
      error,
    });
  }
};

const getTablePost = async (req: Request, res: Response) => {
  const { page = '1', search = '', selectFilter = '' } = req.query;
  const limit = 50;
  const skip = (Number(page) - 1) * limit;

  try {
    // Call the service function to fetch data
    const data = await PostDB.getPostTableData({
      search: String(search),
      selectFilter: String(selectFilter),
      skip,
      limit,
    });

    // Respond with the fetched data
    res.json({
      status: true,
      message: 'All posts retrieved successfully',
      data,
    });
  } catch (error) {
    // Respond with an error
    console.error('Error fetching posts:', error);
    res.status(500).json({
      status: false,
      message: 'Post data retrieval failed',
      error: error instanceof Error ? error.message : error,
    });
  }
};

const PostController = {
  createPost,
  getAllPost,
  getSinglePost,
  getTablePost,
  deleteSinglePost,
  updateSingleByPatchPost,
  updateSingleByPutPost,
};

export default PostController;
