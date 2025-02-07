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
const image_model_1 = __importDefault(require("./image.model"));
const createImagesIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield image_model_1.default.create(payload);
    return result;
});
const getImagesIntoDB = (skip) => __awaiter(void 0, void 0, void 0, function* () {
    const result = (yield image_model_1.default.find().limit(70).skip(skip)).reverse();
    const totalimage = yield image_model_1.default.countDocuments();
    const data = {
        data: result,
        total: totalimage,
    };
    return data;
});
const getClientImagesIntoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield image_model_1.default.find().sort({ _id: -1 }).limit(12);
    return result;
});
const deleteImageIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield image_model_1.default.findByIdAndDelete(id);
    return result;
});
const imageDB = {
    createImagesIntoDB,
    getImagesIntoDB,
    deleteImageIntoDB,
    getClientImagesIntoDB,
};
exports.default = imageDB;
