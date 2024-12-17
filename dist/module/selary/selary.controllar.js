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
const selary_service_1 = __importDefault(require("./selary.service"));
const createSelary = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const data = yield selary_service_1.default.createSelaryIntoDB(payload);
        res.json({
            status: true,
            message: 'Selary is posted successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Selary is not created successfully',
            error,
        });
    }
});
const getAllSelary = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield selary_service_1.default.getAllSelaryIntoDB();
        res.json({
            status: true,
            message: 'All Selary got successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Selary is not get successfully',
            error,
        });
    }
});
const getSingleSelary = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield selary_service_1.default.getSingleSelaryIntoDB(id);
        res.json({
            status: true,
            message: 'Single Selary got successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single Selary is not get successfully',
            error,
        });
    }
});
const deleteSingleSelary = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield selary_service_1.default.deleteSingleSelaryIntoDB(id);
        res.json({
            status: true,
            message: 'Single Selary delete successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single Selary is not delete successfully',
            error,
        });
    }
});
const updateSingleByPatchSelary = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const { id } = req.params;
        const data = yield selary_service_1.default.updateSingleByPatchSelaryIntoDB(id, payload);
        res.json({
            status: true,
            message: 'Single Selary update successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single Selary is not update successfully',
            error,
        });
    }
});
const updateSingleByPutSelary = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const { id } = req.params;
        const data = yield selary_service_1.default.updateSingleByPutSelaryIntoDB(id, payload);
        res.json({
            status: true,
            message: 'Single Selary update successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single Selary is not update successfully',
            error,
        });
    }
});
const SelaryController = {
    createSelary,
    getAllSelary,
    getSingleSelary,
    deleteSingleSelary,
    updateSingleByPatchSelary,
    updateSingleByPutSelary,
};
exports.default = SelaryController;
