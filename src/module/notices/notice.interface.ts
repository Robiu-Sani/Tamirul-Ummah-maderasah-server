type ISODateString = string;
type ISOTimeString = string;

export interface NoticeInterface {
  title: string;
  submissionDate: string;
  place?: string;
  endDate?: ISODateString;
  endTime?: ISOTimeString;
  startDate?: ISODateString;
  startTime?: ISOTimeString;
  description: string;
}
