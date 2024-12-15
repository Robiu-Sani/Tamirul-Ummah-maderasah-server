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
const father_model_1 = __importDefault(require("./father/father.model"));
const gairdean_model_1 = __importDefault(require("./gairdean/gairdean.model"));
const mother_model_1 = __importDefault(require("./mother/mother.model"));
const student_model_1 = __importDefault(require("./student.model"));
const createStudentIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_model_1.default.create(payload);
    return result;
});
const getAllStudentIntoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_model_1.default.find();
    return result;
});
const getSingleStudentIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const student = yield student_model_1.default.findById(id);
    const father = yield father_model_1.default.findOne({ studentId: id });
    const mother = yield mother_model_1.default.findOne({ studentId: id });
    const gairdean = yield gairdean_model_1.default.findOne({ studentId: id });
    const result = {
        student,
        father,
        mother,
        gairdean,
    };
    return result;
});
const deleteSingleStudentIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_model_1.default.findByIdAndDelete(id);
    return result;
});
const updateSingleByPatchStudentIntoDB = (id, info) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_model_1.default.findByIdAndUpdate(id, { $set: info }, { new: true });
    return result;
});
const updateSingleByPutStudentIntoDB = (id, info) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_model_1.default.findByIdAndUpdate(id, { $set: info }, { new: true });
    return result;
});
const StudentDB = {
    createStudentIntoDB,
    getAllStudentIntoDB,
    getSingleStudentIntoDB,
    deleteSingleStudentIntoDB,
    updateSingleByPatchStudentIntoDB,
    updateSingleByPutStudentIntoDB,
};
exports.default = StudentDB;
