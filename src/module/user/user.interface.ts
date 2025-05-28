export interface UserInfo {
  name: string;
  id: string;
  role: 'admin' | 'teacher' | 'student' | 'parent';
  password: string;
  image?: string;
  isDeleted?: boolean;
}
