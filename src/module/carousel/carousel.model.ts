import mongoose from 'mongoose';
import { SlideData } from './carousel.interface';

const slideSchema = new mongoose.Schema<SlideData>(
  {
    slide1Title: {
      type: String,
      trim: true,
    },
    slide1Description: {
      type: String,
      trim: true,
    },
    slide2Title: {
      type: String,
      trim: true,
    },
    slide2Description: {
      type: String,
      trim: true,
    },
    slide3Title: {
      type: String,
      trim: true,
    },
    slide3Description: {
      type: String,
      trim: true,
    },
    slide4Title: {
      type: String,
      trim: true,
    },
    slide4Description: {
      type: String,
      trim: true,
    },
    images: {
      slide1: {
        type: String,
        trim: true,
      },
      slide2: {
        type: String,
        trim: true,
      },
      slide3: {
        type: String,
        trim: true,
      },
      slide4: {
        type: String,
        trim: true,
      },
    },
  },
  {
    timestamps: true,
  },
);

const SlideModel = mongoose.model('Slide', slideSchema);

export default SlideModel;
