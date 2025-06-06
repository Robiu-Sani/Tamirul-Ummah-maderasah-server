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
exports.softDeleteClass = exports.updateClass = exports.getClassById = exports.getAllClasses = exports.createClass = void 0;
const class_model_1 = __importDefault(require("./class.model"));
// Create class
const createClass = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield class_model_1.default.create(data);
});
exports.createClass = createClass;
// Get all non-deleted classes
const getAllClasses = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield class_model_1.default.find({ isDeleted: false });
});
exports.getAllClasses = getAllClasses;
// Get a single class by ID (if not deleted)
const getClassById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield class_model_1.default.findOne({ _id: id, isDeleted: false });
});
exports.getClassById = getClassById;
// Update class
const updateClass = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield class_model_1.default.findOneAndUpdate({ _id: id, isDeleted: false }, data, { new: true });
});
exports.updateClass = updateClass;
// Soft delete class
const softDeleteClass = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield class_model_1.default.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
});
exports.softDeleteClass = softDeleteClass;
