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
    const existingResult = yield result_model_1.default.findOne({
        studentId: payload.studentId,
        examName: payload.examName,
    });
    if (existingResult) {
        return { alert: 'Result for this student and exam already exists.' };
    }
    const result = yield result_model_1.default.create(payload);
    return result;
});
const getAllResultIntoDB = (skip) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield result_model_1.default
        .find()
        .populate('studentId')
        .populate('teacherId')
        .skip(skip)
        .limit(50);
    return result;
});
const getResultTableDataIntoDB = (skip, search, studentClass) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e;
    const query = {};
    if (search)
        query.studentName = { $regex: search, $options: 'i' };
    if (studentClass)
        query.studentClass = studentClass;
    const data = yield result_model_1.default
        .find(query)
        .skip(skip)
        .limit(100)
        .select('studentName studentClass studentGender total examName');
    const stats = yield result_model_1.default.aggregate([
        {
            $facet: {
                totalMale: [{ $match: { studentGender: 'male' } }, { $count: 'count' }],
                totalFemale: [
                    { $match: { studentGender: 'female' } },
                    { $count: 'count' },
                ],
                uniqueClasses: [{ $group: { _id: '$studentClass' } }],
            },
        },
    ]);
    const totalMale = ((_b = (_a = stats[0]) === null || _a === void 0 ? void 0 : _a.totalMale[0]) === null || _b === void 0 ? void 0 : _b.count) || 0;
    const totalFemale = ((_d = (_c = stats[0]) === null || _c === void 0 ? void 0 : _c.totalFemale[0]) === null || _d === void 0 ? void 0 : _d.count) || 0;
    const uniqueClasses = 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ((_e = stats[0]) === null || _e === void 0 ? void 0 : _e.uniqueClasses.map((cls) => cls._id)) || [];
    return {
        totalMale,
        totalFemale,
        totalStudents: totalMale + totalFemale,
        totalClass: uniqueClasses.length,
        uniqueClasses,
        data,
    };
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
