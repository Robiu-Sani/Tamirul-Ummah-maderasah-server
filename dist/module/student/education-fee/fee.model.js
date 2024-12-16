"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const feeSchema = new mongoose_1.default.Schema({
    studentId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
        ref: 'Students',
    },
    fixedAmount: { type: mongoose_1.default.Schema.Types.Mixed, required: true },
    totalAmount: { type: mongoose_1.default.Schema.Types.Mixed, required: true },
    feeName: { type: String, required: true },
    monthAndYear: { type: String, required: true },
}, { timestamps: true });
const FeeModel = mongoose_1.default.model('fee', feeSchema);
exports.default = FeeModel;
