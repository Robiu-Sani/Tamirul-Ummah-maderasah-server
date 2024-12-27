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
const mother_model_1 = __importDefault(require("./mother.model"));
const createMotherIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield mother_model_1.default.create(payload);
    return result;
});
const getAllMotherIntoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield mother_model_1.default.find().populate('studentId');
    return result;
});
const getSingleMotherIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield mother_model_1.default.findById(id).populate('studentId');
    return result;
});
const deleteSingleMotherIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield mother_model_1.default.findByIdAndDelete(id);
    return result;
});
const updateSingleByPatchMotherIntoDB = (id, info) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield mother_model_1.default.findByIdAndUpdate(id, { $set: info }, { new: true });
    return result;
});
const updateSingleByPutMotherIntoDB = (id, info) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield mother_model_1.default.findByIdAndUpdate(id, { $set: info }, { new: true });
    return result;
});
const getMotherTableDataDB = (_a) => __awaiter(void 0, [_a], void 0, function* ({ search = '', 
// classFilter = '',
limit, skip, }) {
    // Build the query object based on filters
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const query = {};
    if (search) {
        query.motherNameEn = { $regex: search, $options: 'i' };
    }
    // Fetch students, count total students, and fetch unique classes
    const [mothers, allMothers] = yield Promise.all([
        mother_model_1.default.find(query)
            .select('mobilenumber workLocation bloodGroup monthlyIncome motherNameEn')
            .skip(skip)
            .limit(limit),
        mother_model_1.default.find(query).select('bloodGroup'),
    ]);
    const reversedMothers = mothers.reverse();
    // Count total students based on filters
    const totalMothers = allMothers.length;
    const totalPages = Math.ceil(totalMothers / limit);
    // Return the final result
    return {
        totalPages,
        totalMothers,
        fathers: reversedMothers,
    };
});
const MotherDB = {
    createMotherIntoDB,
    getAllMotherIntoDB,
    getSingleMotherIntoDB,
    deleteSingleMotherIntoDB,
    updateSingleByPatchMotherIntoDB,
    updateSingleByPutMotherIntoDB,
    getMotherTableDataDB,
};
exports.default = MotherDB;
