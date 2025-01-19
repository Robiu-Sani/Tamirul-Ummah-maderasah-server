"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
releaseSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const existingData = yield ReleaseModel.findOne();
        if (existingData) {
            // Replace the existing document with the new data
            yield ReleaseModel.deleteMany(); // Remove all existing documents
        }
        next();
    });
});
// Create the model from the schema
const ReleaseModel = mongoose_1.default.model('Release', releaseSchema);
exports.default = ReleaseModel;
