import mongoose from 'mongoose';

const consultingSchema = new mongoose.Schema({
  contactNumber: { type: Number, required: true },
  description: { type: String, required: true },
  name: { type: String, required: true },
  type: { type: String, required: true },
});
const consoltModel = mongoose.model('consult', consultingSchema);
export default consoltModel;
