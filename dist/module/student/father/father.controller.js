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
const father_services_1 = __importDefault(require("./father.services"));
const createFather = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const data = yield father_services_1.default.createFatherIntoDB(payload);
        res.json({
            status: true,
            message: 'Father is posted successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Father is not created successfully',
            error,
        });
    }
});
const getAllFather = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield father_services_1.default.getAllFatherIntoDB();
        res.json({
            status: true,
            message: 'All Father got successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Father is not get successfully',
            error,
        });
    }
});
const getSingleFather = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield father_services_1.default.getSingleFatherIntoDB(id);
        res.json({
            status: true,
            message: 'Single Father got successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single Father is not get successfully',
            error,
        });
    }
});
const deleteSingleFather = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield father_services_1.default.deleteSingleFatherIntoDB(id);
        res.json({
            status: true,
            message: 'Single Father delete successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single Father is not delete successfully',
            error,
        });
    }
});
const updateSingleByPatchFather = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const { id } = req.params;
        const data = yield father_services_1.default.updateSingleByPatchFatherIntoDB(id, payload);
        res.json({
            status: true,
            message: 'Single Father update successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single Father is not update successfully',
            error,
        });
    }
});
const updateSingleByPutFather = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const { id } = req.params;
        const data = yield father_services_1.default.updateSingleByPutFatherIntoDB(id, payload);
        res.json({
            status: true,
            message: 'Single Father update successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single Father is not update successfully',
            error,
        });
    }
});
const FatherController = {
    createFather,
    getAllFather,
    getSingleFather,
    deleteSingleFather,
    updateSingleByPatchFather,
    updateSingleByPutFather,
};
exports.default = FatherController;
