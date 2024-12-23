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
exports.SecendSamisterModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const result_model_1 = __importDefault(require("../result.model"));
exports.SecendSamisterModel = mongoose_1.default.model('secend-Samister', result_model_1.default);
const createSecendSamisterIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield exports.SecendSamisterModel.create(payload);
    return result;
});
const getAllSecendSamisterIntoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield exports.SecendSamisterModel.find().populate('studentId');
    return result;
});
const getSingleSecendSamisterIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield exports.SecendSamisterModel.findById(id).populate('studentId');
    return result;
});
const deleteSingleSecendSamisterIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield exports.SecendSamisterModel.findByIdAndDelete(id);
    return result;
});
const updateSingleByPatchSecendSamisterIntoDB = (id, info) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield exports.SecendSamisterModel.findByIdAndUpdate(id, { $set: info }, { new: true });
    return result;
});
const updateSingleByPutSecendSamisterIntoDB = (id, info) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield exports.SecendSamisterModel.findByIdAndUpdate(id, { $set: info }, { new: true });
    return result;
});
const SecendSamisterDB = {
    createSecendSamisterIntoDB,
    getAllSecendSamisterIntoDB,
    getSingleSecendSamisterIntoDB,
    deleteSingleSecendSamisterIntoDB,
    updateSingleByPatchSecendSamisterIntoDB,
    updateSingleByPutSecendSamisterIntoDB,
};
exports.default = SecendSamisterDB;
