import mongoose from 'mongoose';
import { NotifectionInterface } from './notifection.interface';

const NotifectionSchema = new mongoose.Schema<NotifectionInterface>({
  name: { type: String, required: true },
  messages: { type: String, required: true },
  info: { type: Object, required: true },
  path: { type: String, required: true },
  isClick: { type: Boolean, required: true },
});

NotifectionSchema.index(
  { createdAt: 1 },
  { expireAfterSeconds: 20 * 24 * 60 * 60 },
);

const NotifectionModel = mongoose.model('notifection', NotifectionSchema);
export default NotifectionModel;
