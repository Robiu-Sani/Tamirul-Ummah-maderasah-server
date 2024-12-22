"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const motherSchema = new mongoose_1.default.Schema({
    whatsapp: {
        type: String,
        default: null,
    },
    bloodGroup: {
        type: String,
        default: null,
    },
    deathYear: {
        type: String,
        default: null,
    },
    email: {
        type: String,
        default: null,
    },
    facebook: {
        type: String,
        default: null,
    },
    motherNameBn: {
        type: String,
        required: true,
    },
    motherNameEn: {
        type: String,
        required: true,
    },
    motherImage: {
        type: String,
        default: 'https://i.postimg.cc/8Ph6x2Kc/115-1150152-default-profile-picture-avatar-png-green.png',
    },
    mobilenumber: {
        type: String,
        required: true,
    },
    monthlyIncome: {
        type: String,
        required: true,
    },
    nidNumber: {
        type: String,
        required: true,
    },
    occupation: {
        type: String,
        required: true,
    },
    workLocation: {
        type: String,
        required: true,
    },
    studentId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
        unique: true,
        ref: 'Students',
    },
}, { timestamps: true });
const MotherModel = mongoose_1.default.model('mother', motherSchema);
exports.default = MotherModel;
