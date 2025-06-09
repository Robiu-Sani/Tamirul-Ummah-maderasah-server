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
const student_model_1 = __importDefault(require("../student/student.model"));
const teacher_model_1 = __importDefault(require("../teacher/teacher.model"));
const user_model_1 = __importDefault(require("../user/user.model"));
const studentAuth = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = payload;
    // Find all students with the provided email
    const students = yield student_model_1.default.find({ email });
    if (students.length === 0) {
        throw new Error('Invalid email');
    }
    // Check if any student's password matches
    const matchedStudent = students.find((student) => student.password == password);
    if (!matchedStudent) {
        throw new Error('Invalid password');
    }
    if (matchedStudent.type !== 'student') {
        throw new Error('You are blocked');
    }
    // Return the matched student data
    return matchedStudent;
});
const teacherAuth = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = payload;
    // Find the teacher with the provided email
    const teacher = yield teacher_model_1.default.findOne({ email });
    if (!teacher) {
        throw new Error('Invalid email');
    }
    // Compare the provided password with the stored password
    const teacherPassword = teacher.teacherPassword;
    // Check if the passwords match
    const isPasswordMatched = teacherPassword === password;
    if (!isPasswordMatched) {
        throw new Error('Invalid password');
    }
    // Check if the teacher has the correct type
    if (teacher.type === 'blocked') {
        throw new Error('You are blocked');
    }
    // Return the teacher data if authentication is successful
    return teacher;
});
const userAuth = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, password } = payload;
    // Find the user with the provided ID
    const user = (yield user_model_1.default.findOne({ id: id })) ||
        (yield teacher_model_1.default.findOne({ id: id }));
    if (!user) {
        throw new Error('Invalid user ID');
    }
    // Compare the provided password with the stored password
    const isPasswordMatched = user.password === password;
    if (!isPasswordMatched) {
        throw new Error('Invalid password');
    }
    let member;
    if (user.role === 'student') {
        member = yield student_model_1.default.findOne({ id: user.id });
    }
    else {
        member = yield teacher_model_1.default.findOne({ id: user.id });
    }
    return { user, member };
});
const authDB = {
    studentAuth,
    teacherAuth,
    userAuth,
};
exports.default = authDB;
