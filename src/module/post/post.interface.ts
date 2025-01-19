import { ObjectId } from 'mongoose';

export interface PostDetails {
  studentID: ObjectId;
  reports?: string;
  isSelected: boolean;
  postTitle: string;
  postDescription: string;
  postImage?: string | null;
}
