"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const generateRandomPassword = () => {
    return Math.floor(10000000 + Math.random() * 90000000).toString();
};
const userSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    id: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    role: {
        type: String,
        enum: ['admin', 'teacher', 'student', 'parent'],
        required: true,
    },
    password: {
        type: String,
        required: true,
        default: generateRandomPassword,
    },
    image: {
        type: String,
        default: 'https://i.postimg.cc/8Ph6x2Kc/115-1150152-default-profile-picture-avatar-png-green.png',
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
    class: {
        type: String,
        default: 'teacher',
    },
}, { timestamps: true });
const UserModel = mongoose_1.default.model('User', userSchema);
exports.default = UserModel;
