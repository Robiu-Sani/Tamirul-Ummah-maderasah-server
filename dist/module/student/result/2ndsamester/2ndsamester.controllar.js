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
const _2ndsamester_service_1 = __importDefault(require("./2ndsamester.service"));
const createSecendSamister = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const data = yield _2ndsamester_service_1.default.createSecendSamisterIntoDB(payload);
        res.json({
            status: true,
            message: 'SecendSamister is posted successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'SecendSamister is not created successfully',
            error,
        });
    }
});
const getAllSecendSamister = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield _2ndsamester_service_1.default.getAllSecendSamisterIntoDB();
        res.json({
            status: true,
            message: 'All SecendSamister got successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'SecendSamister is not get successfully',
            error,
        });
    }
});
const getSingleSecendSamister = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield _2ndsamester_service_1.default.getSingleSecendSamisterIntoDB(id);
        res.json({
            status: true,
            message: 'Single SecendSamister got successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single SecendSamister is not get successfully',
            error,
        });
    }
});
const deleteSingleSecendSamister = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield _2ndsamester_service_1.default.deleteSingleSecendSamisterIntoDB(id);
        res.json({
            status: true,
            message: 'Single SecendSamister delete successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single SecendSamister is not delete successfully',
            error,
        });
    }
});
const updateSingleByPatchSecendSamister = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const { id } = req.params;
        const data = yield _2ndsamester_service_1.default.updateSingleByPatchSecendSamisterIntoDB(id, payload);
        res.json({
            status: true,
            message: 'Single SecendSamister update successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single SecendSamister is not update successfully',
            error,
        });
    }
});
const updateSingleByPutSecendSamister = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const { id } = req.params;
        const data = yield _2ndsamester_service_1.default.updateSingleByPutSecendSamisterIntoDB(id, payload);
        res.json({
            status: true,
            message: 'Single SecendSamister update successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single SecendSamister is not update successfully',
            error,
        });
    }
});
const SecendSamisterController = {
    createSecendSamister,
    getAllSecendSamister,
    getSingleSecendSamister,
    deleteSingleSecendSamister,
    updateSingleByPatchSecendSamister,
    updateSingleByPutSecendSamister,
};
exports.default = SecendSamisterController;
