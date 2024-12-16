"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const postSchema = new mongoose_1.default.Schema({
    studentID: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
        ref: 'Students',
    },
    postTitle: { type: String, required: true },
    postDescription: { type: String, required: true },
    isSelected: { type: Boolean, required: true, default: false },
    postImage: { type: String, required: false },
});
const PostModel = mongoose_1.default.model('posts', postSchema);
exports.default = PostModel;
