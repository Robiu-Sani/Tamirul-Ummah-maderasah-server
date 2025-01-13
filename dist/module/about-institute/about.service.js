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
const consulting_model_1 = __importDefault(require("../consulting/consulting.model"));
const student_model_1 = __importDefault(require("../student/student.model"));
const teacher_model_1 = __importDefault(require("../teacher/teacher.model"));
const about_model_1 = __importDefault(require("./about.model"));
const createAboutIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield about_model_1.default.create(payload);
    return result;
});
const getAllAboutIntoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield about_model_1.default.find();
    return result;
});
const getSingleAboutIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield about_model_1.default.findById(id);
    return result;
});
const deleteSingleAboutIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield about_model_1.default.findByIdAndDelete(id);
    return result;
});
const updateSingleByPatchAboutIntoDB = (id, info) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield about_model_1.default.findByIdAndUpdate(id, { $set: info }, { new: true });
    return result;
});
const updateSingleByPutAboutIntoDB = (id, info) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield about_model_1.default.findByIdAndUpdate(id, { $set: info }, { new: true });
    return result;
});
const bannerInfo = () => __awaiter(void 0, void 0, void 0, function* () {
    const totalUser = yield student_model_1.default.countDocuments();
    const totalStudent = yield student_model_1.default.countDocuments({ isRunning: true });
    const totalTeacher = yield teacher_model_1.default.countDocuments();
    const totalMessage = yield consulting_model_1.default.countDocuments();
    const classes = yield student_model_1.default.aggregate([
        {
            $match: { isRunning: true },
        },
        {
            $group: {
                _id: '$class',
                totalStudents: { $sum: 1 },
                boys: { $sum: { $cond: [{ $eq: ['$gender', 'male'] }, 1, 0] } },
                girls: { $sum: { $cond: [{ $eq: ['$gender', 'female'] }, 1, 0] } },
            },
        },
        {
            $project: {
                className: '$_id',
                _id: 0,
                totalStudents: 1,
                boys: 1,
                girls: 1,
            },
        },
    ]);
    const shifts = yield teacher_model_1.default.aggregate([
        {
            $group: {
                _id: '$shift', // Group by shift
                totalTeachers: { $sum: 1 }, // Total teachers in each shift
            },
        },
        {
            $project: {
                shiftName: '$_id',
                _id: 0,
                totalTeachers: 1,
            },
        },
    ]);
    // Group data by residentialStatus
    const residentialStatuses = yield teacher_model_1.default.aggregate([
        {
            $group: {
                _id: '$residentialStatus', // Group by residentialStatus
                totalTeachers: { $sum: 1 }, // Total teachers in each residentialStatus
            },
        },
        {
            $project: {
                residentialStatus: '$_id',
                _id: 0,
                totalTeachers: 1,
            },
        },
    ]);
    const data = {
        totalUser,
        totalStudent,
        totalTeacher,
        totalMessage,
        classes,
        shifts,
        residentialStatuses,
    };
    return data;
});
const AboutDB = {
    createAboutIntoDB,
    getAllAboutIntoDB,
    getSingleAboutIntoDB,
    deleteSingleAboutIntoDB,
    updateSingleByPatchAboutIntoDB,
    updateSingleByPutAboutIntoDB,
    bannerInfo,
};
exports.default = AboutDB;
