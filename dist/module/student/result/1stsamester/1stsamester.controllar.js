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
const _1stsamester_service_1 = __importDefault(require("./1stsamester.service"));
const createFirstSamister = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const data = yield _1stsamester_service_1.default.createFirstSamisterIntoDB(payload);
        res.json({
            status: true,
            message: 'FirstSamister is posted successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'FirstSamister is not created successfully',
            error,
        });
    }
});
const getAllFirstSamister = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield _1stsamester_service_1.default.getAllFirstSamisterIntoDB();
        res.json({
            status: true,
            message: 'All FirstSamister got successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'FirstSamister is not get successfully',
            error,
        });
    }
});
const getSingleFirstSamister = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield _1stsamester_service_1.default.getSingleFirstSamisterIntoDB(id);
        res.json({
            status: true,
            message: 'Single FirstSamister got successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single FirstSamister is not get successfully',
            error,
        });
    }
});
const deleteSingleFirstSamister = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield _1stsamester_service_1.default.deleteSingleFirstSamisterIntoDB(id);
        res.json({
            status: true,
            message: 'Single FirstSamister delete successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single FirstSamister is not delete successfully',
            error,
        });
    }
});
const updateSingleByPatchFirstSamister = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const { id } = req.params;
        const data = yield _1stsamester_service_1.default.updateSingleByPatchFirstSamisterIntoDB(id, payload);
        res.json({
            status: true,
            message: 'Single FirstSamister update successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single FirstSamister is not update successfully',
            error,
        });
    }
});
const updateSingleByPutFirstSamister = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const { id } = req.params;
        const data = yield _1stsamester_service_1.default.updateSingleByPutFirstSamisterIntoDB(id, payload);
        res.json({
            status: true,
            message: 'Single FirstSamister update successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single FirstSamister is not update successfully',
            error,
        });
    }
});
const FirstSamisterController = {
    createFirstSamister,
    getAllFirstSamister,
    getSingleFirstSamister,
    deleteSingleFirstSamister,
    updateSingleByPatchFirstSamister,
    updateSingleByPutFirstSamister,
};
exports.default = FirstSamisterController;
