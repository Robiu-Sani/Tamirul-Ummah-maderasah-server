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
const post_model_1 = __importDefault(require("../post/post.model"));
const father_model_1 = __importDefault(require("./father/father.model"));
const gairdean_model_1 = __importDefault(require("./gairdean/gairdean.model"));
const mother_model_1 = __importDefault(require("./mother/mother.model"));
const result_model_1 = __importDefault(require("./result/result.model"));
const student_model_1 = __importDefault(require("./student.model"));
const createStudentIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_model_1.default.create(payload);
    return result;
});
const getAllStudentIntoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_model_1.default.find();
    return result;
});
const getSearchBarData = (_a) => __awaiter(void 0, [_a], void 0, function* ({ search = '' }) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const query = {};
    if (search) {
        query.studentNameEnglish = { $regex: search, $options: 'i' };
    }
    const result = yield student_model_1.default.find(query)
        .select('studentNameEnglish image class gender classRoll ')
        .skip(0)
        .limit(15);
    return result;
});
const getTableData = (_a) => __awaiter(void 0, [_a], void 0, function* ({ search = '', classFilter = '', limit, skip, }) {
    // Build the query object based on filters
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const query = {};
    if (search) {
        query.studentNameEnglish = { $regex: search, $options: 'i' };
    }
    if (classFilter) {
        query.class = classFilter;
    }
    // Fetch students, count total students, and fetch unique classes
    const [students, allStudents] = yield Promise.all([
        student_model_1.default.find(query)
            .select('bloodGroup class gender classRoll type section isRunning studentNameEnglish')
            .skip(skip)
            .limit(limit),
        student_model_1.default.find(query).select('class'),
    ]);
    const reversedStudents = students.reverse();
    const totalMale = yield student_model_1.default.countDocuments({ gender: 'male' });
    const totalFemale = yield student_model_1.default.countDocuments({ gender: 'female' });
    const uniqueClasses = yield student_model_1.default.distinct('class');
    // Count total students based on filters
    const totalStudents = allStudents.length;
    const totalPages = Math.ceil(totalStudents / limit);
    // Return the final result
    return {
        totalStudents,
        totalMale,
        totalFemale,
        totalPages,
        totalClasses: uniqueClasses.length,
        uniqueClasses,
        students: reversedStudents,
    };
});
const getSingleStudentIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const student = yield student_model_1.default.findById(id);
    const father = yield father_model_1.default.findOne({ studentId: id });
    const mother = yield mother_model_1.default.findOne({ studentId: id });
    const posts = yield post_model_1.default.find({ studentID: id })
        .populate('studentID')
        .sort({ _id: -1 });
    const gairdean = yield gairdean_model_1.default.findOne({ studentId: id });
    const results = yield result_model_1.default.find({ studentId: id });
    const result = {
        student,
        father,
        mother,
        gairdean,
        results,
        posts,
    };
    return result;
});
const deleteSingleStudentIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    // const result = await StudentModel.findByIdAndDelete(id);
    const student = yield student_model_1.default.findByIdAndDelete(id);
    const father = yield father_model_1.default.findOneAndDelete({ studentId: id });
    const mother = yield mother_model_1.default.findOneAndDelete({ studentId: id });
    const posts = yield post_model_1.default.deleteMany({ studentID: id });
    const results = yield result_model_1.default.deleteMany({ studentId: id });
    const gairdean = yield gairdean_model_1.default.findOneAndDelete({ studentId: id });
    const result = {
        student,
        father,
        mother,
        gairdean,
        results,
        posts,
    };
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
const getStudentByClassIntoDB = (className, gender) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_model_1.default.find({
        class: className,
        gender: gender,
    }).select('studentNameEnglish classRoll gender');
    return result;
});
const StudentDB = {
    createStudentIntoDB,
    getAllStudentIntoDB,
    getSingleStudentIntoDB,
    deleteSingleStudentIntoDB,
    updateSingleByPatchStudentIntoDB,
    updateSingleByPutStudentIntoDB,
    getTableData,
    getStudentByClassIntoDB,
    getSearchBarData,
};
exports.default = StudentDB;
