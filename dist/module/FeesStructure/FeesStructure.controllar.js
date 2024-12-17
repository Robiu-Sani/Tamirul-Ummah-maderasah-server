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
const FeesStructure_service_1 = __importDefault(require("./FeesStructure.service"));
const createFeesStructure = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const data = yield FeesStructure_service_1.default.createFeesStructureIntoDB(payload);
        res.json({
            status: true,
            message: 'FeesStructure is posted successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'FeesStructure is not created successfully',
            error,
        });
    }
});
const getAllFeesStructure = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield FeesStructure_service_1.default.getAllFeesStructureIntoDB();
        res.json({
            status: true,
            message: 'All FeesStructure got successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'FeesStructure is not get successfully',
            error,
        });
    }
});
const getSingleFeesStructure = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield FeesStructure_service_1.default.getSingleFeesStructureIntoDB(id);
        res.json({
            status: true,
            message: 'Single FeesStructure got successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single FeesStructure is not get successfully',
            error,
        });
    }
});
const deleteSingleFeesStructure = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield FeesStructure_service_1.default.deleteSingleFeesStructureIntoDB(id);
        res.json({
            status: true,
            message: 'Single FeesStructure delete successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single FeesStructure is not delete successfully',
            error,
        });
    }
});
const updateSingleByPatchFeesStructure = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const { id } = req.params;
        const data = yield FeesStructure_service_1.default.updateSingleByPatchFeesStructureIntoDB(id, payload);
        res.json({
            status: true,
            message: 'Single FeesStructure update successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single FeesStructure is not update successfully',
            error,
        });
    }
});
const updateSingleByPutFeesStructure = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const { id } = req.params;
        const data = yield FeesStructure_service_1.default.updateSingleByPutFeesStructureIntoDB(id, payload);
        res.json({
            status: true,
            message: 'Single FeesStructure update successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single FeesStructure is not update successfully',
            error,
        });
    }
});
const FeesStructureController = {
    createFeesStructure,
    getAllFeesStructure,
    getSingleFeesStructure,
    deleteSingleFeesStructure,
    updateSingleByPatchFeesStructure,
    updateSingleByPutFeesStructure,
};
exports.default = FeesStructureController;
