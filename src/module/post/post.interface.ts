import { ObjectId } from 'mongoose';

export interface PostDetails {
  studentID: ObjectId;
  isSelected: boolean;
  postTitle: string;
  postDescription: string;
  postImage?: string | null;
}
