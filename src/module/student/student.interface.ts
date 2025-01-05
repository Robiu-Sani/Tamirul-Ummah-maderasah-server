export interface StudentInfo {
  address: string;
  birthCertificate: string;
  bloodGroup: string;
  class: string;
  dateOfBirth: string | number;
  email: string;
  fathersName: string;
  gender: string;
  height: string;
  // identityEmail: string;
  identityMark: string;
  image: string;
  mothersName: string;
  residentialStatus: string;
  section: string;
  studentNameBangla: string;
  studentNameEnglish: string;
  weight: string;
  classRoll: number;
  type: 'student' | 'blocked';
  isRunning: boolean;
  password: string | number | undefined;
}
