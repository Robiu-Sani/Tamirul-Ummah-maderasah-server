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
const contact_service_1 = __importDefault(require("./contact.service"));
const createInstitution = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const data = yield contact_service_1.default.createInstitutionIntoDB(payload);
        res.json({
            status: true,
            message: 'Institution is posted successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Institution is not created successfully',
            error,
        });
    }
});
const getAllInstitution = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield contact_service_1.default.getAllInstitutionIntoDB();
        res.json({
            status: true,
            message: 'All Institution got successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Institution is not get successfully',
            error,
        });
    }
});
const getSingleInstitution = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield contact_service_1.default.getSingleInstitutionIntoDB(id);
        res.json({
            status: true,
            message: 'Single Institution got successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single Institution is not get successfully',
            error,
        });
    }
});
const deleteSingleInstitution = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield contact_service_1.default.deleteSingleInstitutionIntoDB(id);
        res.json({
            status: true,
            message: 'Single Institution delete successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single Institution is not delete successfully',
            error,
        });
    }
});
const updateSingleByPatchInstitution = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const { id } = req.params;
        const data = yield contact_service_1.default.updateSingleByPatchInstitutionIntoDB(id, payload);
        res.json({
            status: true,
            message: 'Single Institution update successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single Institution is not update successfully',
            error,
        });
    }
});
const updateSingleByPutInstitution = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const { id } = req.params;
        const data = yield contact_service_1.default.updateSingleByPutInstitutionIntoDB(id, payload);
        res.json({
            status: true,
            message: 'Single Institution update successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single Institution is not update successfully',
            error,
        });
    }
});
const InstitutionController = {
    createInstitution,
    getAllInstitution,
    getSingleInstitution,
    deleteSingleInstitution,
    updateSingleByPatchInstitution,
    updateSingleByPutInstitution,
};
exports.default = InstitutionController;
