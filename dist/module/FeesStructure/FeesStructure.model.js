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
const FeesStructureSchema = new mongoose_1.default.Schema({
    nasaariToSecondGrade: { type: Number, required: false },
    thirdToFifthGrade: { type: Number, required: false },
    sixthToAlimGrade: { type: Number, required: false },
    admissionFee: { type: Number, required: false },
    establishmentFee: { type: Number, required: false },
    aliaTuitionFee: { type: Number, required: false },
    aliaAccommodationFee: { type: Number, required: false },
    aliaMonthlyFoodFee: { type: Number, required: false },
    aliaOtherFees: { type: Number, required: false },
    hifzAdmissionFormFee: { type: Number, required: false },
    hifzNewAdmissionFee: { type: Number, required: false },
    hifzRenewalAdmissionFee: { type: Number, required: false },
    hifzTuitionFee: { type: Number, required: false },
    hifzMonthlyFoodFee: { type: Number, required: false },
    hifzAccommodationAndPreservationFee: { type: Number, required: false },
    hifzChild: { type: Number, required: false },
    hifzFirstToSecondGrade: { type: Number, required: false },
    hifzThirdToSixthGrade: { type: Number, required: false },
    hifzSemesterExamFee: { type: Number, required: false },
    hifzDigitalExamFee: { type: Number, required: false },
}, {
    timestamps: true,
});
FeesStructureSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const existingData = yield FeesStructureModel.findOne();
        if (existingData) {
            // Replace the existing document with the new data
            yield FeesStructureModel.deleteMany(); // Remove all existing documents
        }
        next();
    });
});
const FeesStructureModel = mongoose_1.default.model('fee-structure', FeesStructureSchema);
exports.default = FeesStructureModel;
