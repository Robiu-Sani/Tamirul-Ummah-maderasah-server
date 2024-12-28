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
const gairdean_model_1 = __importDefault(require("./gairdean.model"));
const createGairdeanIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield gairdean_model_1.default.create(payload);
    return result;
});
const getAllGairdeanIntoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield gairdean_model_1.default.find().populate('studentId');
    return result;
});
const getSingleGairdeanIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield gairdean_model_1.default.findById(id).populate('studentId');
    return result;
});
const deleteSingleGairdeanIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield gairdean_model_1.default.findByIdAndDelete(id);
    return result;
});
const updateSingleByPatchGairdeanIntoDB = (id, info) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield gairdean_model_1.default.findByIdAndUpdate(id, { $set: info }, { new: true });
    return result;
});
const updateSingleByPutGairdeanIntoDB = (id, info) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield gairdean_model_1.default.findByIdAndUpdate(id, { $set: info }, { new: true });
    return result;
});
const getGairdeanTableDataDB = (_a) => __awaiter(void 0, [_a], void 0, function* ({ search = '', 
// classFilter = '',
limit, skip, }) {
    // Build the query object based on filters
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const query = {};
    if (search) {
        query.gairdeanNameEn = { $regex: search, $options: 'i' };
    }
    // Fetch students, count total students, and fetch unique classes
    const [gairdeans, allGairdeans] = yield Promise.all([
        gairdean_model_1.default.find(query)
            .select('mobilenumber workLocation bloodGroup monthlyIncome gairdeanNameEn')
            .skip(skip)
            .limit(limit),
        gairdean_model_1.default.find(query).select('bloodGroup'),
    ]);
    const reversedGairdeans = gairdeans.reverse();
    // Count total students based on filters
    const totalGairdeans = allGairdeans.length;
    const totalPages = Math.ceil(totalGairdeans / limit);
    // Return the final result
    return {
        totalPages,
        totalGairdeans,
        gairdeans: reversedGairdeans,
    };
});
const GairdeanDB = {
    createGairdeanIntoDB,
    getAllGairdeanIntoDB,
    getSingleGairdeanIntoDB,
    deleteSingleGairdeanIntoDB,
    updateSingleByPatchGairdeanIntoDB,
    updateSingleByPutGairdeanIntoDB,
    getGairdeanTableDataDB,
};
exports.default = GairdeanDB;
