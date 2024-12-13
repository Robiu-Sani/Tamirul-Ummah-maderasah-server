import mongoose, { model } from 'mongoose';
import { NoticeInterface } from './notice.interface';

const noticeSchema = new mongoose.Schema<NoticeInterface>(
  {
    title: {
      type: String,
      required: [true, 'There must have to add title'],
    },
    submissionDate: {
      type: String,
      required: [true, 'There must have to add a notice submition date'],
    },
    place: {
      type: String,
      required: false,
    },
    endDate: {
      type: String,
      required: false,
    },
    endTime: {
      type: String,
      required: false,
    },
    startDate: {
      type: String,
      required: false,
    },
    startTime: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: [true, ' This Description fild is required'],
    },
  },
  {
    timestamps: true,
  },
);

const noticeModel = model<NoticeInterface>('notices', noticeSchema);

export default noticeModel;
