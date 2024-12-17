"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const NotifectionSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    messages: { type: String, required: true },
    info: { type: Object, required: true },
    path: { type: String, required: true },
    isClick: { type: Boolean, required: true },
});
const NotifectionModel = mongoose_1.default.model('notifection', NotifectionSchema);
exports.default = NotifectionModel;
