"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const fatherSchema = new mongoose_1.default.Schema({
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
    fatherNameBn: {
        type: String,
        required: true,
    },
    fatherNameEn: {
        type: String,
        required: true,
    },
    fatherImage: {
        type: String,
        default: null,
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
const fatherModel = mongoose_1.default.model('father', fatherSchema);
exports.default = fatherModel;
