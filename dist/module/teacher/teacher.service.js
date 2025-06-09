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
const user_model_1 = __importDefault(require("../user/user.model"));
const teacher_model_1 = __importDefault(require("./teacher.model"));
const createTeacherIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const currentYear = new Date().getFullYear().toString();
    const yearPrefix = currentYear;
    const lastTeacherOfYear = yield teacher_model_1.default.findOne({
        id: { $regex: `^${yearPrefix}` },
    }).sort({ createdAt: -1 });
    let newSerialNumber = 1;
    if (lastTeacherOfYear && lastTeacherOfYear.id) {
        const lastId = lastTeacherOfYear.id;
        const lastSerial = parseInt(lastId.slice(4), 10);
        newSerialNumber = lastSerial + 1;
    }
    const serialPart = newSerialNumber.toString().padStart(4, '0');
    const teacherId = `${yearPrefix}${serialPart}`;
    const password = Math.floor(10000000 + Math.random() * 90000000).toString();
    const userData = {
        name: payload.teacherName,
        id: teacherId,
        role: 'teacher',
        password,
        image: payload.teacherImage || '',
        class: payload.shift,
    };
    const TeacherData = Object.assign(Object.assign({}, payload), { id: teacherId, teacherPassword: password });
    const teacher = yield teacher_model_1.default.create(TeacherData);
    const user = yield user_model_1.default.create(userData);
    return {
        teacher,
        user,
    };
});
const getAllTeacherIntoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield teacher_model_1.default.find();
    return result;
});
const getSingleTeacherIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield teacher_model_1.default.findById(id);
    return result;
});
const deleteSingleTeacherIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield teacher_model_1.default.findByIdAndDelete(id);
    return result;
});
const updateSingleByPatchTeacherIntoDB = (id, info) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield teacher_model_1.default.findByIdAndUpdate(id, { $set: info }, { new: true });
    return result;
});
const updateSingleByPutTeacherIntoDB = (id, info) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield teacher_model_1.default.findByIdAndUpdate(id, { $set: info }, { new: true });
    return result;
});
const getTeacherTableDataDB = (_a) => __awaiter(void 0, [_a], void 0, function* ({ search = '', classFilter = '', limit, skip, }) {
    // Build the query object based on filters
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const query = {
        _id: { $ne: '678fd6cc7ea4d5600640e9ba' }, // Exclude the specific ID
    };
    if (search) {
        query.teacherName = { $regex: search, $options: 'i' };
    }
    if (classFilter) {
        query.shift = classFilter;
    }
    // Fetch teachers with pagination
    const [teachers, totalTeachers, uniqueClasses] = yield Promise.all([
        teacher_model_1.default.find(query)
            .select('bloodGroup phone gender email type residentialStatus teacherName shift')
            .skip(skip)
            .limit(limit),
        teacher_model_1.default.countDocuments(query), // Proper count for total teachers
        teacher_model_1.default.distinct('shift', query), // Fetch unique classes
    ]);
    const reversedTeachers = teachers.reverse();
    const totalMale = yield teacher_model_1.default.countDocuments(Object.assign(Object.assign({}, query), { gender: 'male' }));
    const totalFemale = yield teacher_model_1.default.countDocuments(Object.assign(Object.assign({}, query), { gender: 'female' }));
    const totalPages = Math.ceil(totalTeachers / limit);
    // Return the final result
    return {
        totalTeachers, // Total teachers count based on filters
        totalMale,
        totalFemale,
        totalPages,
        totalClasses: uniqueClasses.length,
        uniqueClasses,
        teacher: reversedTeachers,
    };
});
const getClientSiteTeacher = () => __awaiter(void 0, void 0, void 0, function* () {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const query = {
        _id: { $ne: '678fd6cc7ea4d5600640e9ba' }, // Exclude the specific ID
    };
    const result = yield teacher_model_1.default.find(query).select('teacherImage phone subject teacherName');
    return result;
});
const TeacherDB = {
    createTeacherIntoDB,
    getAllTeacherIntoDB,
    getTeacherTableDataDB,
    getSingleTeacherIntoDB,
    deleteSingleTeacherIntoDB,
    updateSingleByPatchTeacherIntoDB,
    updateSingleByPutTeacherIntoDB,
    getClientSiteTeacher,
};
exports.default = TeacherDB;
