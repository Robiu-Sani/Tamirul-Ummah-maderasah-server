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
const result_model_1 = __importDefault(require("../result.model"));
const FristTutiralModel = mongoose_1.default.model('first-tutiral', result_model_1.default);
const createFirstTutiralIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield FristTutiralModel.create(payload);
    return result;
});
const getAllFirstTutiralIntoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield FristTutiralModel.find().populate('studentId');
    return result;
});
const getSingleFirstTutiralIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield FristTutiralModel.findById(id).populate('studentId');
    return result;
});
const deleteSingleFirstTutiralIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield FristTutiralModel.findByIdAndDelete(id);
    return result;
});
const updateSingleByPatchFirstTutiralIntoDB = (id, info) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield FristTutiralModel.findByIdAndUpdate(id, { $set: info }, { new: true });
    return result;
});
const updateSingleByPutFirstTutiralIntoDB = (id, info) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield FristTutiralModel.findByIdAndUpdate(id, { $set: info }, { new: true });
    return result;
});
const FirstTutiralDB = {
    createFirstTutiralIntoDB,
    getAllFirstTutiralIntoDB,
    getSingleFirstTutiralIntoDB,
    deleteSingleFirstTutiralIntoDB,
    updateSingleByPatchFirstTutiralIntoDB,
    updateSingleByPutFirstTutiralIntoDB,
};
exports.default = FirstTutiralDB;
