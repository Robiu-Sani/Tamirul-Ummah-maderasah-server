export interface TeacherDetails {
  address: string;
  id: string;
  bloodGroup: string;
  dateOfBirth: string;
  email: string;
  experience?: string;
  teacherImage?: string;
  gender: string;
  phone: string;
  qualification: string;
  residentialStatus?: string;
  section: string;
  shift: string;
  subject: string;
  teacherName: string;
  nidNumber: number;
  type: 'teacher' | 'admin' | 'blocked';
  teacherPassword: string | number | undefined;
}
