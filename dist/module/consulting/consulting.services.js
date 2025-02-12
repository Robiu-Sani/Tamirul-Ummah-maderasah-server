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
const consulting_model_1 = __importDefault(require("./consulting.model"));
const createConsultIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield consulting_model_1.default.create(payload);
    return result;
});
const getConsultIntoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield consulting_model_1.default.find();
    return result;
});
const deleteConsultIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = consulting_model_1.default.findByIdAndDelete(id);
    return result;
});
const messagesCategoryDB = (cetagory) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield consulting_model_1.default
        .find({
        type: cetagory,
    })
        .sort({ _id: -1 });
    return result;
});
const consultDB = {
    createConsultIntoDB,
    getConsultIntoDB,
    deleteConsultIntoDB,
    messagesCategoryDB,
};
exports.default = consultDB;
