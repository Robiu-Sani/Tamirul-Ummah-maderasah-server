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
const FeesStructure_model_1 = __importDefault(require("./FeesStructure.model"));
const createFeesStructureIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield FeesStructure_model_1.default.create(payload);
    return result;
});
const getAllFeesStructureIntoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield FeesStructure_model_1.default.find();
    return result;
});
const getSingleFeesStructureIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield FeesStructure_model_1.default.findOne({ FeesStructureId: id });
    return result;
});
const deleteSingleFeesStructureIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield FeesStructure_model_1.default.findByIdAndDelete(id);
    return result;
});
const updateSingleByPatchFeesStructureIntoDB = (id, info) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield FeesStructure_model_1.default.findByIdAndUpdate(id, { $set: info }, { new: true });
    return result;
});
const updateSingleByPutFeesStructureIntoDB = (id, info) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield FeesStructure_model_1.default.findByIdAndUpdate(id, { $set: info }, { new: true });
    return result;
});
const FeesStructureDB = {
    createFeesStructureIntoDB,
    getAllFeesStructureIntoDB,
    getSingleFeesStructureIntoDB,
    deleteSingleFeesStructureIntoDB,
    updateSingleByPatchFeesStructureIntoDB,
    updateSingleByPutFeesStructureIntoDB,
};
exports.default = FeesStructureDB;
