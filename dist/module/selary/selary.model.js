"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const selarySchema = new mongoose_1.default.Schema({
    teacherId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'teacher',
        required: true,
    }, // Refers to Teacher model
    amount: { type: Number, required: true },
    month: { type: String, required: true },
    year: { type: Number, required: true }, // Allows string or number
    isSuccess: { type: Boolean, default: false },
});
const SelaryModel = mongoose_1.default.model('selary', selarySchema);
exports.default = SelaryModel;
