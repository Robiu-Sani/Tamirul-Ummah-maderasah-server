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
exports.FristTutiralModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const result_model_1 = __importDefault(require("../result.model"));
exports.FristTutiralModel = mongoose_1.default.model('first-tutiral', result_model_1.default);
const createFirstTutiralIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield exports.FristTutiralModel.create(payload);
    return result;
});
const getAllFirstTutiralIntoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield exports.FristTutiralModel.find()
        .populate('studentId')
        .populate('teacherId');
    return result;
});
const getSingleFirstTutiralIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield exports.FristTutiralModel.findById(id)
        .populate('studentId')
        .populate('teacherId');
    return result;
});
const deleteSingleFirstTutiralIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield exports.FristTutiralModel.findByIdAndDelete(id);
    return result;
});
const updateSingleByPatchFirstTutiralIntoDB = (id, info) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield exports.FristTutiralModel.findByIdAndUpdate(id, { $set: info }, { new: true });
    return result;
});
const updateSingleByPutFirstTutiralIntoDB = (id, info) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield exports.FristTutiralModel.findByIdAndUpdate(id, { $set: info }, { new: true });
    return result;
});
const getFirstTutiralExamTableData = (_a) => __awaiter(void 0, [_a], void 0, function* ({ search = '', classFilter = '', limit = 10, skip = 0, }) {
    var _b, _c, _d;
    try {
        // Build the query object based on filters
        const query = {};
        // Fetch exams and total counts
        const [exams, totalExams] = yield Promise.all([
            exports.FristTutiralModel.find(query)
                .populate('studentId')
                .populate('teacherId')
                .skip(skip)
                .limit(limit),
            exports.FristTutiralModel.countDocuments(query),
        ]);
        // Aggregate data to calculate totalMale, totalFemale, and uniqueClasses
        const aggregationResults = yield exports.FristTutiralModel.aggregate([
            { $match: query }, // Apply  the same query filters
            {
                $lookup: {
                    from: 'students', // Collection name for students
                    localField: 'studentId',
                    foreignField: '_id',
                    as: 'studentDetails',
                },
            },
            { $unwind: '$studentDetails' }, // Unwind student details
            {
                $group: {
                    _id: null,
                    totalMale: {
                        $sum: {
                            $cond: [{ $eq: ['$studentDetails.gender', 'male'] }, 1, 0],
                        },
                    },
                    totalFemale: {
                        $sum: {
                            $cond: [{ $eq: ['$studentDetails.gender', 'female'] }, 1, 0],
                        },
                    },
                    uniqueClasses: { $addToSet: '$studentDetails.class' },
                },
            },
        ]);
        if (search && typeof search === 'string' && search.trim() !== '') {
            query['studentId.studentNameEnglish'] = { $regex: search, $options: 'i' };
        }
        if (classFilter) {
            query['studentId.class'] = classFilter;
        }
        // Extract aggregation results
        const totalMale = ((_b = aggregationResults[0]) === null || _b === void 0 ? void 0 : _b.totalMale) || 0;
        const totalFemale = ((_c = aggregationResults[0]) === null || _c === void 0 ? void 0 : _c.totalFemale) || 0;
        const uniqueClasses = ((_d = aggregationResults[0]) === null || _d === void 0 ? void 0 : _d.uniqueClasses) || [];
        const totalClasses = uniqueClasses.length;
        // Calculate total pages
        const totalPages = Math.ceil(totalExams / limit);
        // Return the final result
        return {
            totalExams,
            totalMale,
            totalFemale,
            totalPages,
            totalClasses,
            uniqueClasses,
            exams,
        };
    }
    catch (error) {
        console.error('Error fetching exam data:', error);
        throw new Error('Unable to fetch exam data. Please try again later.');
    }
});
const FirstTutiralDB = {
    createFirstTutiralIntoDB,
    getAllFirstTutiralIntoDB,
    getSingleFirstTutiralIntoDB,
    deleteSingleFirstTutiralIntoDB,
    updateSingleByPatchFirstTutiralIntoDB,
    updateSingleByPutFirstTutiralIntoDB,
    getFirstTutiralExamTableData,
};
exports.default = FirstTutiralDB;
