"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const consultingSchema = new mongoose_1.default.Schema({
    contactNumber: { type: Number, required: true },
    description: { type: String, required: true },
    name: { type: String, required: true },
    type: { type: String, required: true },
});
const consoltModel = mongoose_1.default.model('consult', consultingSchema);
exports.default = consoltModel;
