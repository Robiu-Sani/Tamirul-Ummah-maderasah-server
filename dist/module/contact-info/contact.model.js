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
const institutionSchema = new mongoose_1.default.Schema({
    institutionNameEnglish: {
        type: String,
        required: true,
        trim: true,
    },
    institutionAddressEnglish: {
        type: String,
        trim: true,
    },
    institutionNameBanglaArabic: {
        type: String,
        trim: true,
    },
    institutionAddressBanglaArabic: {
        type: String,
        trim: true,
    },
    address: {
        type: String,
        trim: true,
    },
    contactNumber: {
        type: String,
        trim: true,
    },
    whatsApp: {
        type: String,
        trim: true,
    },
    telegram: {
        type: String,
        trim: true,
    },
    facebook: {
        type: String,
        trim: true,
    },
    twitter: {
        type: String,
        trim: true,
    },
    instagram: {
        type: String,
        trim: true,
    },
    youtube: {
        type: String,
        trim: true,
    },
    discord: {
        type: String,
        trim: true,
    },
    messenger: {
        type: String,
        trim: true,
    },
    linkedIn: {
        type: String,
        trim: true,
    },
    submissionDate: {
        type: String,
    },
    logo: {
        type: String,
        trim: true,
    },
}, {
    timestamps: true,
});
institutionSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const existingData = yield InstitutionModel.findOne();
        if (existingData) {
            // Replace the existing document with the new data
            yield InstitutionModel.deleteMany(); // Remove all existing documents
        }
        next();
    });
});
const InstitutionModel = mongoose_1.default.model('Institution', institutionSchema);
exports.default = InstitutionModel;
