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
const gain_model_1 = __importDefault(require("./gain.model"));
const createGainIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield gain_model_1.default.create(payload);
    return result;
});
const getAllGainIntoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield gain_model_1.default.find().sort({ _id: -1 });
    return result;
});
const updateGainIntoDB = (payload, id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield gain_model_1.default.findByIdAndUpdate(id, { $set: payload }, { new: true });
    return result;
});
const deleteGainIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield gain_model_1.default.findByIdAndDelete(id);
    return result;
});
const gainDB = {
    createGainIntoDB,
    getAllGainIntoDB,
    updateGainIntoDB,
    deleteGainIntoDB,
};
exports.default = gainDB;
