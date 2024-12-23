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
exports.FristSamisterModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const result_model_1 = __importDefault(require("../result.model"));
exports.FristSamisterModel = mongoose_1.default.model('first-samister', result_model_1.default);
const createFirstSamisterIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield exports.FristSamisterModel.create(payload);
    return result;
});
const getAllFirstSamisterIntoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield exports.FristSamisterModel.find().populate('studentId');
    return result;
});
const getSingleFirstSamisterIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield exports.FristSamisterModel.findById(id).populate('studentId');
    return result;
});
const deleteSingleFirstSamisterIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield exports.FristSamisterModel.findByIdAndDelete(id);
    return result;
});
const updateSingleByPatchFirstSamisterIntoDB = (id, info) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield exports.FristSamisterModel.findByIdAndUpdate(id, { $set: info }, { new: true });
    return result;
});
const updateSingleByPutFirstSamisterIntoDB = (id, info) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield exports.FristSamisterModel.findByIdAndUpdate(id, { $set: info }, { new: true });
    return result;
});
const FirstSamisterDB = {
    createFirstSamisterIntoDB,
    getAllFirstSamisterIntoDB,
    getSingleFirstSamisterIntoDB,
    deleteSingleFirstSamisterIntoDB,
    updateSingleByPatchFirstSamisterIntoDB,
    updateSingleByPutFirstSamisterIntoDB,
};
exports.default = FirstSamisterDB;
