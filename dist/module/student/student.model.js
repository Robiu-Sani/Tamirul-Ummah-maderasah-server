"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const generateRandomPassword = () => {
    return Math.floor(10000000 + Math.random() * 90000000).toString();
};
const studentSchema = new mongoose_1.default.Schema({
    address: {
        type: String,
        trim: true,
    },
    birthCertificate: {
        type: String,
        trim: true,
    },
    bloodGroup: {
        type: String,
        trim: true,
    },
    class: {
        type: String,
        trim: true,
    },
    dateOfBirth: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
    },
    fathersName: {
        type: String,
        trim: true,
    },
    gender: {
        type: String,
        trim: true,
    },
    height: {
        type: String,
        trim: true,
    },
    // identityEmail: {
    //   type: String,
    //   trim: true,
    // },
    identityMark: {
        type: String,
        trim: true,
    },
    image: {
        type: String,
        default: 'https://i.postimg.cc/8Ph6x2Kc/115-1150152-default-profile-picture-avatar-png-green.png',
    },
    mothersName: {
        type: String,
        trim: true,
    },
    residentialStatus: {
        type: String,
        trim: true,
    },
    section: {
        type: String,
        trim: true,
    },
    studentNameBangla: {
        type: String,
        trim: true,
    },
    studentNameEnglish: {
        type: String,
        trim: true,
    },
    classRoll: { type: Number, required: false, default: 0 },
    weight: {
        type: String,
        trim: true,
    },
    password: {
        type: mongoose_1.default.Schema.Types.Mixed,
        trim: true,
        default: generateRandomPassword,
    },
    isRunning: { type: Boolean, required: true, default: true },
    monthlyFee: { type: Number, required: true, default: 750 },
    type: {
        type: String,
        default: 'student',
    },
    studentId: {
        type: String,
        trim: true,
        unique: true,
    },
}, {
    timestamps: true,
});
const StudentModel = mongoose_1.default.model('Students', studentSchema);
exports.default = StudentModel;
