"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const imageSchema = new mongoose_1.default.Schema({
    image: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: {
        type: String,
        required: true,
        default: () => new Date().getFullYear().toString(),
    },
}, { timestamps: true });
const imageModel = mongoose_1.default.model('images', imageSchema);
exports.default = imageModel;
