import mongoose from 'mongoose';
import { InstitutionData } from './contact.interface';

const institutionSchema = new mongoose.Schema<InstitutionData>(
  {
    institutionNameEnglish: {
      type: String,
      required: true,
      trim: true,
    },
    institutionAddressEnglish: {
      type: String,
      trim: true,
    },
    institutionNameBanglaArabic: {
      type: String,
      trim: true,
    },
    institutionAddressBanglaArabic: {
      type: String,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },
    contactNumber: {
      type: String,
      trim: true,
    },
    whatsApp: {
      type: String,
      trim: true,
    },
    telegram: {
      type: String,
      trim: true,
    },
    facebook: {
      type: String,
      trim: true,
    },
    twitter: {
      type: String,
      trim: true,
    },
    instagram: {
      type: String,
      trim: true,
    },
    youtube: {
      type: String,
      trim: true,
    },
    discord: {
      type: String,
      trim: true,
    },
    messenger: {
      type: String,
      trim: true,
    },
    linkedIn: {
      type: String,
      trim: true,
    },
    submissionDate: {
      type: String,
    },
    logo: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

const InstitutionModel = mongoose.model('Institution', institutionSchema);

export default InstitutionModel;
