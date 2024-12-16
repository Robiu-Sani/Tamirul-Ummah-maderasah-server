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
const _1stutiral_service_1 = __importDefault(require("./1stutiral.service"));
const createFirstTutiral = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const data = yield _1stutiral_service_1.default.createFirstTutiralIntoDB(payload);
        res.json({
            status: true,
            message: 'FirstTutiral is posted successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'FirstTutiral is not created successfully',
            error,
        });
    }
});
const getAllFirstTutiral = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield _1stutiral_service_1.default.getAllFirstTutiralIntoDB();
        res.json({
            status: true,
            message: 'All FirstTutiral got successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'FirstTutiral is not get successfully',
            error,
        });
    }
});
const getSingleFirstTutiral = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield _1stutiral_service_1.default.getSingleFirstTutiralIntoDB(id);
        res.json({
            status: true,
            message: 'Single FirstTutiral got successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single FirstTutiral is not get successfully',
            error,
        });
    }
});
const deleteSingleFirstTutiral = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield _1stutiral_service_1.default.deleteSingleFirstTutiralIntoDB(id);
        res.json({
            status: true,
            message: 'Single FirstTutiral delete successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single FirstTutiral is not delete successfully',
            error,
        });
    }
});
const updateSingleByPatchFirstTutiral = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const { id } = req.params;
        const data = yield _1stutiral_service_1.default.updateSingleByPatchFirstTutiralIntoDB(id, payload);
        res.json({
            status: true,
            message: 'Single FirstTutiral update successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single FirstTutiral is not update successfully',
            error,
        });
    }
});
const updateSingleByPutFirstTutiral = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const { id } = req.params;
        const data = yield _1stutiral_service_1.default.updateSingleByPutFirstTutiralIntoDB(id, payload);
        res.json({
            status: true,
            message: 'Single FirstTutiral update successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single FirstTutiral is not update successfully',
            error,
        });
    }
});
const FirstTutiralController = {
    createFirstTutiral,
    getAllFirstTutiral,
    getSingleFirstTutiral,
    deleteSingleFirstTutiral,
    updateSingleByPatchFirstTutiral,
    updateSingleByPutFirstTutiral,
};
exports.default = FirstTutiralController;
