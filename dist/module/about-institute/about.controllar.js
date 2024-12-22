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
const about_service_1 = __importDefault(require("./about.service"));
const createAbout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const data = yield about_service_1.default.createAboutIntoDB(payload);
        res.json({
            status: true,
            message: 'About is posted successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'About is not created successfully',
            error,
        });
    }
});
const getAllAbout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield about_service_1.default.getAllAboutIntoDB();
        res.json({
            status: true,
            message: 'All About got successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'About is not get successfully',
            error,
        });
    }
});
const getSingleAbout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield about_service_1.default.getSingleAboutIntoDB(id);
        res.json({
            status: true,
            message: 'Single About got successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single About is not get successfully',
            error,
        });
    }
});
const deleteSingleAbout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield about_service_1.default.deleteSingleAboutIntoDB(id);
        res.json({
            status: true,
            message: 'Single About delete successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single About is not delete successfully',
            error,
        });
    }
});
const updateSingleByPatchAbout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const { id } = req.params;
        const data = yield about_service_1.default.updateSingleByPatchAboutIntoDB(id, payload);
        res.json({
            status: true,
            message: 'Single About update successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single About is not update successfully',
            error,
        });
    }
});
const updateSingleByPutAbout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const { id } = req.params;
        const data = yield about_service_1.default.updateSingleByPutAboutIntoDB(id, payload);
        res.json({
            status: true,
            message: 'Single About update successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single About is not update successfully',
            error,
        });
    }
});
const AboutController = {
    createAbout,
    getAllAbout,
    getSingleAbout,
    deleteSingleAbout,
    updateSingleByPatchAbout,
    updateSingleByPutAbout,
};
exports.default = AboutController;
