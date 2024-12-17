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
const notifection_model_1 = __importDefault(require("./notifection.model"));
const createNotifectionIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield notifection_model_1.default.create(payload);
    return result;
});
const getAllNotifectionIntoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield notifection_model_1.default.find();
    return result;
});
const getSingleNotifectionIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield notifection_model_1.default.findById(id);
    return result;
});
const deleteSingleNotifectionIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield notifection_model_1.default.findByIdAndDelete(id);
    return result;
});
const updateSingleByPatchNotifectionIntoDB = (id, info) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield notifection_model_1.default.findByIdAndUpdate(id, { $set: info }, { new: true });
    return result;
});
const updateSingleByPutNotifectionIntoDB = (id, info) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield notifection_model_1.default.findByIdAndUpdate(id, { $set: info }, { new: true });
    return result;
});
const NotifectionDB = {
    createNotifectionIntoDB,
    getAllNotifectionIntoDB,
    getSingleNotifectionIntoDB,
    deleteSingleNotifectionIntoDB,
    updateSingleByPatchNotifectionIntoDB,
    updateSingleByPutNotifectionIntoDB,
};
exports.default = NotifectionDB;
