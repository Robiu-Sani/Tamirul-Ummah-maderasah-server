export interface TeacherDetails {
  address: string;
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
  type: 'teacher' | 'admin' | 'blocked';
  teacherPassword: string | number | undefined;
}
