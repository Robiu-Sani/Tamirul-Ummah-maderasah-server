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
exports.getTableData = void 0;
const post_model_1 = __importDefault(require("../post/post.model"));
const father_model_1 = __importDefault(require("./father/father.model"));
const gairdean_model_1 = __importDefault(require("./gairdean/gairdean.model"));
const mother_model_1 = __importDefault(require("./mother/mother.model"));
const _1stsamester_service_1 = require("./result/1stsamester/1stsamester.service");
const _1stutiral_service_1 = require("./result/1stutiral/1stutiral.service");
const _2ndsamester_service_1 = require("./result/2ndsamester/2ndsamester.service");
const _2ndtutiral_services_1 = require("./result/2stutiral/2ndtutiral.services");
const student_model_1 = __importDefault(require("./student.model"));
const createStudentIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_model_1.default.create(payload);
    return result;
});
const getAllStudentIntoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_model_1.default.find();
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
            .select('bloodGroup class gender classRoll type section studentNameEnglish')
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
exports.getTableData = getTableData;
// const getTableData = async () => {
//   const students = (await StudentModel.find().select(
//     'bloodGroup class gender classRoll section studentNameEnglish',
//   )) as {
//     bloodGroup: string;
//     class: string;
//     gender: string;
//     classRoll: number;
//     section: string;
//     studentNameEnglish: string;
//   }[];
//   let totalMale: number = 0;
//   let totalFemale: number = 0;
//   const classSet = new Set<string>();
//   // Iterate through the students array
//   students.forEach((student) => {
//     if (student.gender === 'male') {
//       totalMale++;
//     } else if (student.gender === 'female') {
//       totalFemale++;
//     }
//     classSet.add(student.class); // Ensure `student.class` is treated as a string
//   });
//   const totalStudents: number = students.length;
//   // Convert the set of classes to an array
//   const uniqueClasses: string[] = Array.from(classSet);
//   const result = {
//     totalStudents,
//     totalMale,
//     totalFemale,
//     totalClasses: classSet.size, // Total number of unique classes
//     uniqueClasses, // Array of unique class names
//     students,
//   };
//   return result;
// };
const getSingleStudentIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const student = yield student_model_1.default.findById(id);
    const father = yield father_model_1.default.findOne({ studentId: id });
    const mother = yield mother_model_1.default.findOne({ studentId: id });
    const posts = yield post_model_1.default.find({ studentID: id });
    const gairdean = yield gairdean_model_1.default.findOne({ studentId: id });
    const first_tutiral = yield _1stutiral_service_1.FristTutiralModel.findOne({ studentId: id });
    const first_samistar = yield _1stsamester_service_1.FristSamisterModel.findOne({ studentId: id });
    const secend_tutiral = yield _2ndtutiral_services_1.SecendTutiralModel.findOne({ studentId: id });
    const secend_samistar = yield _2ndsamester_service_1.SecendSamisterModel.findOne({ studentId: id });
    const result = {
        student,
        father,
        mother,
        gairdean,
        posts,
        result: {
            first_tutiral,
            first_samistar,
            secend_tutiral,
            secend_samistar,
        },
    };
    return result;
});
const deleteSingleStudentIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    // const result = await StudentModel.findByIdAndDelete(id);
    const student = yield student_model_1.default.findByIdAndDelete(id);
    const father = yield father_model_1.default.findOneAndDelete({ studentId: id });
    const mother = yield mother_model_1.default.findOneAndDelete({ studentId: id });
    const posts = yield post_model_1.default.deleteMany({ studentID: id });
    const gairdean = yield gairdean_model_1.default.findOneAndDelete({ studentId: id });
    const first_tutiral = yield _1stutiral_service_1.FristTutiralModel.findOneAndDelete({
        studentId: id,
    });
    const first_samistar = yield _1stsamester_service_1.FristSamisterModel.findOneAndDelete({
        studentId: id,
    });
    const secend_tutiral = yield _2ndtutiral_services_1.SecendTutiralModel.findOneAndDelete({
        studentId: id,
    });
    const secend_samistar = yield _2ndsamester_service_1.SecendSamisterModel.findOneAndDelete({
        studentId: id,
    });
    const result = {
        student,
        father,
        mother,
        gairdean,
        posts,
        result: {
            first_tutiral,
            first_samistar,
            secend_tutiral,
            secend_samistar,
        },
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
const StudentDB = {
    createStudentIntoDB,
    getAllStudentIntoDB,
    getSingleStudentIntoDB,
    deleteSingleStudentIntoDB,
    updateSingleByPatchStudentIntoDB,
    updateSingleByPutStudentIntoDB,
    getTableData: exports.getTableData,
};
exports.default = StudentDB;
