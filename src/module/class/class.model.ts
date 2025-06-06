import { Schema, model } from 'mongoose';
import { IClass } from './class.interface';

// Mongoose schema
const classSchema = new Schema<IClass>(
  {
    name: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true, // optional: adds createdAt and updatedAt
  },
);

// Mongoose model
const ClassModel = model<IClass>('Class', classSchema);

export default ClassModel;
