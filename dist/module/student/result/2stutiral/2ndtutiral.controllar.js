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
const _2ndtutiral_services_1 = __importDefault(require("./2ndtutiral.services"));
const createSecendTutiral = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const data = yield _2ndtutiral_services_1.default.createSecendTutiralIntoDB(payload);
        res.json({
            status: true,
            message: 'SecendTutiral is posted successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'SecendTutiral is not created successfully',
            error,
        });
    }
});
const getAllSecendTutiral = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield _2ndtutiral_services_1.default.getAllSecendTutiralIntoDB();
        res.json({
            status: true,
            message: 'All SecendTutiral got successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'SecendTutiral is not get successfully',
            error,
        });
    }
});
const getSingleSecendTutiral = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield _2ndtutiral_services_1.default.getSingleSecendTutiralIntoDB(id);
        res.json({
            status: true,
            message: 'Single SecendTutiral got successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single SecendTutiral is not get successfully',
            error,
        });
    }
});
const deleteSingleSecendTutiral = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield _2ndtutiral_services_1.default.deleteSingleSecendTutiralIntoDB(id);
        res.json({
            status: true,
            message: 'Single SecendTutiral delete successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single SecendTutiral is not delete successfully',
            error,
        });
    }
});
const updateSingleByPatchSecendTutiral = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const { id } = req.params;
        const data = yield _2ndtutiral_services_1.default.updateSingleByPatchSecendTutiralIntoDB(id, payload);
        res.json({
            status: true,
            message: 'Single SecendTutiral update successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single SecendTutiral is not update successfully',
            error,
        });
    }
});
const updateSingleByPutSecendTutiral = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const { id } = req.params;
        const data = yield _2ndtutiral_services_1.default.updateSingleByPutSecendTutiralIntoDB(id, payload);
        res.json({
            status: true,
            message: 'Single SecendTutiral update successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single SecendTutiral is not update successfully',
            error,
        });
    }
});
const SecendTutiralController = {
    createSecendTutiral,
    getAllSecendTutiral,
    getSingleSecendTutiral,
    deleteSingleSecendTutiral,
    updateSingleByPatchSecendTutiral,
    updateSingleByPutSecendTutiral,
};
exports.default = SecendTutiralController;
