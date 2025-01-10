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
const authDB = {
    studentAuth,
};
exports.default = authDB;
