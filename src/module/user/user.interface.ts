export interface UserInfo {
  name: string;
  id: string;
  role: 'admin' | 'teacher' | 'student' | 'parent';
  password: string;
  image?: string;
  class?: string;
  isDeleted?: boolean;
}
