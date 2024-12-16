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
const fee_service_1 = __importDefault(require("./fee.service"));
const createFee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const data = yield fee_service_1.default.createFeeIntoDB(payload);
        res.json({
            status: true,
            message: 'Fee is posted successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Fee is not created successfully',
            error,
        });
    }
});
const getAllFee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield fee_service_1.default.getAllFeeIntoDB();
        res.json({
            status: true,
            message: 'All Fee got successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Fee is not get successfully',
            error,
        });
    }
});
const getSingleFee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield fee_service_1.default.getSingleFeeIntoDB(id);
        res.json({
            status: true,
            message: 'Single Fee got successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single Fee is not get successfully',
            error,
        });
    }
});
const deleteSingleFee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield fee_service_1.default.deleteSingleFeeIntoDB(id);
        res.json({
            status: true,
            message: 'Single Fee delete successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single Fee is not delete successfully',
            error,
        });
    }
});
const updateSingleByPatchFee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const { id } = req.params;
        const data = yield fee_service_1.default.updateSingleByPatchFeeIntoDB(id, payload);
        res.json({
            status: true,
            message: 'Single Fee update successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single Fee is not update successfully',
            error,
        });
    }
});
const updateSingleByPutFee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const { id } = req.params;
        const data = yield fee_service_1.default.updateSingleByPutFeeIntoDB(id, payload);
        res.json({
            status: true,
            message: 'Single Fee update successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single Fee is not update successfully',
            error,
        });
    }
});
const FeeController = {
    createFee,
    getAllFee,
    getSingleFee,
    deleteSingleFee,
    updateSingleByPatchFee,
    updateSingleByPutFee,
};
exports.default = FeeController;
