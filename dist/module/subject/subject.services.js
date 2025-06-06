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
exports.softDeleteSubject = exports.updateSubject = exports.getSubjectById = exports.getAllSubjects = exports.createSubject = void 0;
const subject_model_1 = __importDefault(require("./subject.model"));
const createSubject = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield subject_model_1.default.create(data);
});
exports.createSubject = createSubject;
const getAllSubjects = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield subject_model_1.default.find({ isDeleted: false });
});
exports.getAllSubjects = getAllSubjects;
const getSubjectById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield subject_model_1.default.findOne({ _id: id, isDeleted: false });
});
exports.getSubjectById = getSubjectById;
const updateSubject = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield subject_model_1.default.findOneAndUpdate({ _id: id, isDeleted: false }, data, { new: true });
});
exports.updateSubject = updateSubject;
const softDeleteSubject = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield subject_model_1.default.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
});
exports.softDeleteSubject = softDeleteSubject;
