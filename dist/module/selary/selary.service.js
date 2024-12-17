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
const selary_model_1 = __importDefault(require("./selary.model"));
const createSelaryIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield selary_model_1.default.create(payload);
    return result;
});
const getAllSelaryIntoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield selary_model_1.default.find().populate('studentId');
    return result;
});
const getSingleSelaryIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield selary_model_1.default.findById(id).populate('studentId');
    return result;
});
const deleteSingleSelaryIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield selary_model_1.default.findByIdAndDelete(id);
    return result;
});
const updateSingleByPatchSelaryIntoDB = (id, info) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield selary_model_1.default.findByIdAndUpdate(id, { $set: info }, { new: true });
    return result;
});
const updateSingleByPutSelaryIntoDB = (id, info) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield selary_model_1.default.findByIdAndUpdate(id, { $set: info }, { new: true });
    return result;
});
const SelaryDB = {
    createSelaryIntoDB,
    getAllSelaryIntoDB,
    getSingleSelaryIntoDB,
    deleteSingleSelaryIntoDB,
    updateSingleByPatchSelaryIntoDB,
    updateSingleByPutSelaryIntoDB,
};
exports.default = SelaryDB;
