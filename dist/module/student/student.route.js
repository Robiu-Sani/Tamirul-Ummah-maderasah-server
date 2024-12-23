"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.student_router = void 0;
const express_1 = __importDefault(require("express"));
const student_controllar_1 = __importDefault(require("./student.controllar"));
const router = express_1.default.Router();
router.post('/create-student', student_controllar_1.default.createStudent);
router.get('/table', student_controllar_1.default.getTableStudent);
router.get('/', student_controllar_1.default.getAllStudent);
router.get('/single-student/:id', student_controllar_1.default.getSingleStudent);
router.delete('/delete-student/:id', student_controllar_1.default.deleteSingleStudent);
router.patch('/update-single-student-by-patch/:id', student_controllar_1.default.updateSingleByPatchStudent);
router.put('/update-single-student-by-put/:id', student_controllar_1.default.updateSingleByPutStudent);
exports.student_router = router;
