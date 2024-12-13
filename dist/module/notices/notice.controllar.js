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
const notice_service_1 = __importDefault(require("./notice.service"));
const createNotice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const data = yield notice_service_1.default.createNoticeIntoDB(payload);
        res.json({
            status: true,
            message: 'Notice is posted successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Notice is not created successfully',
            error,
        });
    }
});
const getAllNotice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield notice_service_1.default.getAllNoticeIntoDB();
        res.json({
            status: true,
            message: 'All notice got successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Notice is not get successfully',
            error,
        });
    }
});
const getSingleNotice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield notice_service_1.default.getSingleNoticeIntoDB(id);
        res.json({
            status: true,
            message: 'Single notice got successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single notice is not get successfully',
            error,
        });
    }
});
const deleteSingleNotice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield notice_service_1.default.deleteSingleNoticeIntoDB(id);
        res.json({
            status: true,
            message: 'Single notice delete successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single notice is not delete successfully',
            error,
        });
    }
});
const updateSingleByPatchNotice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const { id } = req.params;
        const data = yield notice_service_1.default.updateSingleByPatchNoticeIntoDB(id, payload);
        res.json({
            status: true,
            message: 'Single notice update successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single notice is not update successfully',
            error,
        });
    }
});
const updateSingleByPutNotice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const { id } = req.params;
        const data = yield notice_service_1.default.updateSingleByPutNoticeIntoDB(id, payload);
        res.json({
            status: true,
            message: 'Single notice update successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single notice is not update successfully',
            error,
        });
    }
});
const noticeController = {
    createNotice,
    getAllNotice,
    getSingleNotice,
    deleteSingleNotice,
    updateSingleByPatchNotice,
    updateSingleByPutNotice,
};
exports.default = noticeController;
