"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const slideSchema = new mongoose_1.default.Schema({
    slide1Title: {
        type: String,
        trim: true,
    },
    slide1Description: {
        type: String,
        trim: true,
    },
    slide2Title: {
        type: String,
        trim: true,
    },
    slide2Description: {
        type: String,
        trim: true,
    },
    slide3Title: {
        type: String,
        trim: true,
    },
    slide3Description: {
        type: String,
        trim: true,
    },
    slide4Title: {
        type: String,
        trim: true,
    },
    slide4Description: {
        type: String,
        trim: true,
    },
    images: {
        slide1: {
            type: String,
            trim: true,
        },
        slide2: {
            type: String,
            trim: true,
        },
        slide3: {
            type: String,
            trim: true,
        },
        slide4: {
            type: String,
            trim: true,
        },
    },
}, {
    timestamps: true,
});
const SlideModel = mongoose_1.default.model('Slide', slideSchema);
exports.default = SlideModel;
