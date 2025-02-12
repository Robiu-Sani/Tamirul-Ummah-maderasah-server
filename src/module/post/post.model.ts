import mongoose from 'mongoose';
import { PostDetails } from './post.interface';

const postSchema = new mongoose.Schema<PostDetails>(
  {
    studentID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Students',
    },
    postTitle: { type: String, required: true },
    reports: { type: String, required: false },
    postDescription: { type: String, required: true },
    isSelected: { type: Boolean, required: true, default: false },
    postImage: { type: String, required: false },
  },
  { timestamps: true },
);

const PostModel = mongoose.model('posts', postSchema);
export default PostModel;
