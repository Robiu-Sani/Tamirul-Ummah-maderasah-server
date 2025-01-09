"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const aboutSchema = new mongoose_1.default.Schema({
    speaker: { type: String, required: true }, // Required string field
    title: { type: String, required: true }, // Required string field
    type: { type: String, required: true }, // Required string field
    description: { type: String, required: true }, // Required string field
    aboutImage: { type: String, required: false }, // Optional string field
}, {
    timestamps: true, // Adds createdAt and updatedAt fields automatically
});
// Create the model
const AboutModel = mongoose_1.default.model('About-text', aboutSchema);
exports.default = AboutModel;
