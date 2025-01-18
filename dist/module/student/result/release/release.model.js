"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const releaseSchema = new mongoose_1.default.Schema({
    firstTutorial: {
        type: Date,
        default: () => new Date(new Date().getFullYear(), 11, 1, 12, 0, 0, 0), // Default to 1 December 12:00 AM of the current year
    },
    secondTutorial: {
        type: Date,
        default: () => new Date(new Date().getFullYear(), 11, 1, 12, 0, 0, 0),
    },
    halfYearlyExam: {
        type: Date,
        default: () => new Date(new Date().getFullYear(), 11, 1, 12, 0, 0, 0),
    },
    finalExam: {
        type: Date,
        default: () => new Date(new Date().getFullYear(), 11, 1, 12, 0, 0, 0),
    },
    modelTest: {
        type: Date,
        default: () => new Date(new Date().getFullYear(), 11, 1, 12, 0, 0, 0),
    },
    test: {
        type: Date,
        default: () => new Date(new Date().getFullYear(), 11, 1, 12, 0, 0, 0),
    },
}, { timestamps: true });
// Create the model from the schema
const Release = mongoose_1.default.model('Release', releaseSchema);
exports.default = Release;
