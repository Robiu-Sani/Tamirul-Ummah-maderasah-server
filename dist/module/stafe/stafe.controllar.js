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
const stafe_service_1 = __importDefault(require("./stafe.service"));
const createStafe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const data = yield stafe_service_1.default.createStafeIntoDB(payload);
        res.json({
            status: true,
            message: 'Stafe is posted successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Stafe is not created successfully',
            error,
        });
    }
});
const staffClientSide = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield stafe_service_1.default.staffClientSideIntoDB();
        res.json({
            status: true,
            message: 'All Stafe got successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Stafe is not get successfully',
            error,
        });
    }
});
const getAllStafe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield stafe_service_1.default.getAllStafeIntoDB();
        res.json({
            status: true,
            message: 'All Stafe got successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Stafe is not get successfully',
            error,
        });
    }
});
const getSingleStafe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield stafe_service_1.default.getSingleStafeIntoDB(id);
        res.json({
            status: true,
            message: 'Single Stafe got successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single Stafe is not get successfully',
            error,
        });
    }
});
const deleteSingleStafe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield stafe_service_1.default.deleteSingleStafeIntoDB(id);
        res.json({
            status: true,
            message: 'Single Stafe delete successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single Stafe is not delete successfully',
            error,
        });
    }
});
const updateSingleByPatchStafe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const { id } = req.params;
        const data = yield stafe_service_1.default.updateSingleByPatchStafeIntoDB(id, payload);
        res.json({
            status: true,
            message: 'Single Stafe update successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single Stafe is not update successfully',
            error,
        });
    }
});
const updateSingleByPutStafe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const { id } = req.params;
        const data = yield stafe_service_1.default.updateSingleByPutStafeIntoDB(id, payload);
        res.json({
            status: true,
            message: 'Single Stafe update successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single Stafe is not update successfully',
            error,
        });
    }
});
const getTableStaff = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { page = 1, search = '', class: classFilter = '' } = req.query;
    const limit = 50;
    const skip = (Number(page) - 1) * limit;
    try {
        // Call the service function to fetch data
        const data = yield stafe_service_1.default.getStaffTableDataDB({
            page: Number(page),
            search: String(search),
            classFilter: String(classFilter),
            limit,
            skip,
        });
        // Respond with the fetched data
        res.json({
            status: true,
            message: 'All staff retrieved successfully',
            data,
        });
    }
    catch (error) {
        // Respond with an error
        res.json({
            status: false,
            message: 'staff data retrieval failed',
            error,
        });
    }
});
const StafeController = {
    createStafe,
    getAllStafe,
    getSingleStafe,
    deleteSingleStafe,
    updateSingleByPatchStafe,
    updateSingleByPutStafe,
    getTableStaff,
    staffClientSide,
};
exports.default = StafeController;
