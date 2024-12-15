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
const gairdean_servece_1 = __importDefault(require("./gairdean.servece"));
const createGairdean = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const data = yield gairdean_servece_1.default.createGairdeanIntoDB(payload);
        res.json({
            status: true,
            message: 'Gairdean is posted successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Gairdean is not created successfully',
            error,
        });
    }
});
const getAllGairdean = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield gairdean_servece_1.default.getAllGairdeanIntoDB();
        res.json({
            status: true,
            message: 'All Gairdean got successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Gairdean is not get successfully',
            error,
        });
    }
});
const getSingleGairdean = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield gairdean_servece_1.default.getSingleGairdeanIntoDB(id);
        res.json({
            status: true,
            message: 'Single Gairdean got successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single Gairdean is not get successfully',
            error,
        });
    }
});
const deleteSingleGairdean = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield gairdean_servece_1.default.deleteSingleGairdeanIntoDB(id);
        res.json({
            status: true,
            message: 'Single Gairdean delete successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single Gairdean is not delete successfully',
            error,
        });
    }
});
const updateSingleByPatchGairdean = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const { id } = req.params;
        const data = yield gairdean_servece_1.default.updateSingleByPatchGairdeanIntoDB(id, payload);
        res.json({
            status: true,
            message: 'Single Gairdean update successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single Gairdean is not update successfully',
            error,
        });
    }
});
const updateSingleByPutGairdean = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const { id } = req.params;
        const data = yield gairdean_servece_1.default.updateSingleByPutGairdeanIntoDB(id, payload);
        res.json({
            status: true,
            message: 'Single Gairdean update successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single Gairdean is not update successfully',
            error,
        });
    }
});
const GairdeanController = {
    createGairdean,
    getAllGairdean,
    getSingleGairdean,
    deleteSingleGairdean,
    updateSingleByPatchGairdean,
    updateSingleByPutGairdean,
};
exports.default = GairdeanController;
