"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const institutionSchema = new mongoose_1.default.Schema({
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
}, {
    timestamps: true,
});
const Institution = mongoose_1.default.model('Institution', institutionSchema);
module.exports = Institution;
