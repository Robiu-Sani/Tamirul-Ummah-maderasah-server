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
const notice_model_1 = __importDefault(require("./notice.model"));
const createNoticeIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield notice_model_1.default.create(payload);
    return result;
});
const getAllNoticeIntoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield notice_model_1.default.find();
    return result;
});
const getBannerNoticeIntoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield notice_model_1.default
        .find()
        .sort({ _id: -1 }) // Sort in descending order (latest first)
        .limit(4) // Limit to 4 documents
        .select('title submissionDate'); // Select only `title` and `submissionDate`
    return result;
});
const getSingleNoticeIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield notice_model_1.default.findById(id);
    return result;
});
const deleteSingleNoticeIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield notice_model_1.default.findByIdAndDelete(id);
    return result;
});
const updateSingleByPatchNoticeIntoDB = (id, info) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield notice_model_1.default.findByIdAndUpdate(id, { $set: info }, { new: true });
    return result;
});
const updateSingleByPutNoticeIntoDB = (id, info) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield notice_model_1.default.findByIdAndUpdate(id, { $set: info }, { new: true });
    return result;
});
const noticeDB = {
    createNoticeIntoDB,
    getAllNoticeIntoDB,
    getSingleNoticeIntoDB,
    getBannerNoticeIntoDB,
    deleteSingleNoticeIntoDB,
    updateSingleByPatchNoticeIntoDB,
    updateSingleByPutNoticeIntoDB,
};
exports.default = noticeDB;
