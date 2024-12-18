"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const generateRandomPassword = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
};
const StafeSchema = new mongoose_1.default.Schema({
    address: { type: String, required: true },
    bloodGroup: { type: String, required: true },
    dateOfBirth: { type: String, required: true },
    department: { type: String, required: true },
    designation: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    gender: { type: String, required: true },
    joiningDate: { type: String, required: true },
    phone: { type: String, required: true },
    residentialStatus: { type: String, required: true },
    staffName: { type: String, required: true },
    stafePassword: {
        type: String,
        required: true,
        default: generateRandomPassword,
    },
}, {
    timestamps: true,
});
const StafeModel = mongoose_1.default.model('stafe', StafeSchema);
exports.default = StafeModel;
