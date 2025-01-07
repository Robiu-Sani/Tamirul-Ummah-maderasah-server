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
const stafe_model_1 = __importDefault(require("./stafe.model"));
const createStafeIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield stafe_model_1.default.create(payload);
    return result;
});
const getAllStafeIntoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield stafe_model_1.default.find();
    return result;
});
const getSingleStafeIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield stafe_model_1.default.findById(id);
    return result;
});
const deleteSingleStafeIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield stafe_model_1.default.findByIdAndDelete(id);
    return result;
});
const updateSingleByPatchStafeIntoDB = (id, info) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield stafe_model_1.default.findByIdAndUpdate(id, { $set: info }, { new: true });
    return result;
});
const updateSingleByPutStafeIntoDB = (id, info) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield stafe_model_1.default.findByIdAndUpdate(id, { $set: info }, { new: true });
    return result;
});
const getStaffTableDataDB = (_a) => __awaiter(void 0, [_a], void 0, function* ({ search = '', classFilter = '', limit, skip, }) {
    // Build the query object based on filters
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const query = {};
    if (search) {
        query.staffName = { $regex: search, $options: 'i' };
    }
    if (classFilter) {
        query.residentialStatus = classFilter;
    }
    // Fetch students, count total students, and fetch unique classes
    const [teachers, allTeachers] = yield Promise.all([
        stafe_model_1.default.find(query)
            .select('bloodGroup department staffName phone gender email residentialStatus')
            .skip(skip)
            .limit(limit),
        stafe_model_1.default.find(query).select('residentialStatus'),
    ]);
    const reversedStaff = teachers.reverse();
    const totalMale = yield stafe_model_1.default.countDocuments({ gender: 'male' });
    const totalFemale = yield stafe_model_1.default.countDocuments({ gender: 'female' });
    const uniqueClasses = yield stafe_model_1.default.distinct('residentialStatus');
    // Count total students based on filters
    const totalStaffs = allTeachers.length;
    const totalPages = Math.ceil(totalStaffs / limit);
    // Return the final result
    return {
        totalStaffs,
        totalMale,
        totalFemale,
        totalPages,
        totalClasses: uniqueClasses.length,
        uniqueClasses,
        staff: reversedStaff,
    };
});
const staffClientSideIntoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield stafe_model_1.default.find().select('staffImage staffName phone');
    return result;
});
const StafeDB = {
    createStafeIntoDB,
    getAllStafeIntoDB,
    getSingleStafeIntoDB,
    deleteSingleStafeIntoDB,
    updateSingleByPatchStafeIntoDB,
    updateSingleByPutStafeIntoDB,
    getStaffTableDataDB,
    staffClientSideIntoDB,
};
exports.default = StafeDB;
