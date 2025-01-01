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
exports.resultDB = void 0;
const result_model_1 = __importDefault(require("./result.model"));
const createResultsIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = result_model_1.default.create(payload);
    return result;
});
const getAllResultIntoDB = (skip) => __awaiter(void 0, void 0, void 0, function* () {
    const result = result_model_1.default
        .find()
        .populate('studentId')
        .populate('teacherId')
        .skip(skip)
        .limit(50);
    return result;
});
const getResultTableDataIntoDB = (skip, search, studentClass) => __awaiter(void 0, void 0, void 0, function* () {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const query = {};
    if (search) {
        query.studentNameEnglish = { $regex: search, $options: 'i' };
    }
    if (studentClass) {
        query.studentClass = studentClass;
    }
    const result = result_model_1.default
        .find()
        .select('examName studentName studentClass studentGender piyerAndCarecter total')
        .skip(skip)
        .limit(100);
    return result;
});
const getSingleResultIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = result_model_1.default
        .findById(id)
        .populate('studentId')
        .populate('teacherId');
    return result;
});
exports.resultDB = {
    createResultsIntoDB,
    getAllResultIntoDB,
    getResultTableDataIntoDB,
    getSingleResultIntoDB,
};
