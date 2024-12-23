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
exports.getTableStudent = void 0;
const student_services_1 = __importDefault(require("./student.services"));
// import StudentModel from './student.model';
const createStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const data = yield student_services_1.default.createStudentIntoDB(payload);
        res.json({
            status: true,
            message: 'Student is posted successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Student is not created successfully',
            error,
        });
    }
});
const getAllStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield student_services_1.default.getAllStudentIntoDB();
        res.json({
            status: true,
            message: 'All Student got successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Student is not get successfully',
            error,
        });
    }
});
const getTableStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { page = 1, search = '', class: classFilter = '' } = req.query;
    const limit = 50;
    const skip = (Number(page) - 1) * limit;
    try {
        // Call the service function to fetch data
        const data = yield student_services_1.default.getTableData({
            page: Number(page),
            search: String(search),
            classFilter: String(classFilter),
            limit,
            skip,
        });
        // Respond with the fetched data
        res.json({
            status: true,
            message: 'All students retrieved successfully',
            data,
        });
    }
    catch (error) {
        // Respond with an error
        res.json({
            status: false,
            message: 'Student data retrieval failed',
            error,
        });
    }
});
exports.getTableStudent = getTableStudent;
// export const getTableStudent = async (req: Request, res: Response) => {
//   const { page = 1, search = "", class: classFilter = "" } = req.query;
//   const limit = 50; // Number of records per page
//   const skip = (Number(page) - 1) * limit;
//   try {
//     // Construct query based on search and class filter
//     const query = {};
//     if (search) {
//       query.studentNameEnglish = { $regex: search, $options: "i" };
//     }
//     if (classFilter) {
//       query.class = classFilter;
//     }
//     // Response
//     res.json({
//       status: true,
//       message: "Students fetched successfully",
//       data: {
//         students,
//         totalStudents,
//         uniqueClasses,
//         totalClasses: uniqueClasses.length,
//         totalMale,
//         totalFemale,
//       },
//     });
//   } catch (error) {
//     res.status(500).json({
//       status: false,
//       message: "Failed to fetch students",
//       error: error.message,
//     });
//   }
// };
const getSingleStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield student_services_1.default.getSingleStudentIntoDB(id);
        res.json({
            status: true,
            message: 'Single Student got successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single Student is not get successfully',
            error,
        });
    }
});
const deleteSingleStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield student_services_1.default.deleteSingleStudentIntoDB(id);
        res.json({
            status: true,
            message: 'Single Student delete successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single Student is not delete successfully',
            error,
        });
    }
});
const updateSingleByPatchStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const { id } = req.params;
        const data = yield student_services_1.default.updateSingleByPatchStudentIntoDB(id, payload);
        res.json({
            status: true,
            message: 'Single Student update successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single Student is not update successfully',
            error,
        });
    }
});
const updateSingleByPutStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const { id } = req.params;
        const data = yield student_services_1.default.updateSingleByPutStudentIntoDB(id, payload);
        res.json({
            status: true,
            message: 'Single Student update successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single Student is not update successfully',
            error,
        });
    }
});
const StudentController = {
    createStudent,
    getAllStudent,
    getSingleStudent,
    deleteSingleStudent,
    updateSingleByPatchStudent,
    updateSingleByPutStudent,
    getTableStudent: exports.getTableStudent,
};
exports.default = StudentController;
