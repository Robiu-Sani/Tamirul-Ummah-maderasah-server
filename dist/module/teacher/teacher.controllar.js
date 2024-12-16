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
const teacher_service_1 = __importDefault(require("./teacher.service"));
const createTeacher = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const data = yield teacher_service_1.default.createTeacherIntoDB(payload);
        res.json({
            status: true,
            message: 'Teacher is posted successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Teacher is not created successfully',
            error,
        });
    }
});
const getAllTeacher = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield teacher_service_1.default.getAllTeacherIntoDB();
        res.json({
            status: true,
            message: 'All Teacher got successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Teacher is not get successfully',
            error,
        });
    }
});
const getSingleTeacher = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield teacher_service_1.default.getSingleTeacherIntoDB(id);
        res.json({
            status: true,
            message: 'Single Teacher got successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single Teacher is not get successfully',
            error,
        });
    }
});
const deleteSingleTeacher = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield teacher_service_1.default.deleteSingleTeacherIntoDB(id);
        res.json({
            status: true,
            message: 'Single Teacher delete successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single Teacher is not delete successfully',
            error,
        });
    }
});
const updateSingleByPatchTeacher = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const { id } = req.params;
        const data = yield teacher_service_1.default.updateSingleByPatchTeacherIntoDB(id, payload);
        res.json({
            status: true,
            message: 'Single Teacher update successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single Teacher is not update successfully',
            error,
        });
    }
});
const updateSingleByPutTeacher = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const { id } = req.params;
        const data = yield teacher_service_1.default.updateSingleByPutTeacherIntoDB(id, payload);
        res.json({
            status: true,
            message: 'Single Teacher update successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single Teacher is not update successfully',
            error,
        });
    }
});
const TeacherController = {
    createTeacher,
    getAllTeacher,
    getSingleTeacher,
    deleteSingleTeacher,
    updateSingleByPatchTeacher,
    updateSingleByPutTeacher,
};
exports.default = TeacherController;
