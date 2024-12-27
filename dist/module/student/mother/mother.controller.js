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
const mother_service_1 = __importDefault(require("./mother.service"));
const createMother = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const data = yield mother_service_1.default.createMotherIntoDB(payload);
        res.json({
            status: true,
            message: 'Mother is posted successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Mother is not created successfully',
            error,
        });
    }
});
const getAllMother = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield mother_service_1.default.getAllMotherIntoDB();
        res.json({
            status: true,
            message: 'All Mother got successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Mother is not get successfully',
            error,
        });
    }
});
const getSingleMother = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield mother_service_1.default.getSingleMotherIntoDB(id);
        res.json({
            status: true,
            message: 'Single Mother got successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single Mother is not get successfully',
            error,
        });
    }
});
const deleteSingleMother = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield mother_service_1.default.deleteSingleMotherIntoDB(id);
        res.json({
            status: true,
            message: 'Single Mother delete successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single Mother is not delete successfully',
            error,
        });
    }
});
const updateSingleByPatchMother = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const { id } = req.params;
        const data = yield mother_service_1.default.updateSingleByPatchMotherIntoDB(id, payload);
        res.json({
            status: true,
            message: 'Single Mother update successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single Mother is not update successfully',
            error,
        });
    }
});
const updateSingleByPutMother = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const { id } = req.params;
        const data = yield mother_service_1.default.updateSingleByPutMotherIntoDB(id, payload);
        res.json({
            status: true,
            message: 'Single Mother update successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single Mother is not update successfully',
            error,
        });
    }
});
const getTableMother = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { page = 1, search = '' } = req.query;
    const limit = 50;
    const skip = (Number(page) - 1) * limit;
    try {
        // Call the service function to fetch data
        const data = yield mother_service_1.default.getMotherTableDataDB({
            page: Number(page),
            search: String(search),
            limit,
            skip,
        });
        // Respond with the fetched data
        res.json({
            status: true,
            message: 'All mothers retrieved successfully',
            data,
        });
    }
    catch (error) {
        // Respond with an error
        res.json({
            status: false,
            message: 'motherr data retrieval failed',
            error,
        });
    }
});
const MotherController = {
    createMother,
    getAllMother,
    getSingleMother,
    deleteSingleMother,
    updateSingleByPatchMother,
    updateSingleByPutMother,
    getTableMother,
};
exports.default = MotherController;
