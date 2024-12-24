"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.teacher_router = void 0;
const express_1 = __importDefault(require("express"));
const teacher_controllar_1 = __importDefault(require("./teacher.controllar"));
const router = express_1.default.Router();
router.post('/create-teacher', teacher_controllar_1.default.createTeacher);
router.get('/', teacher_controllar_1.default.getAllTeacher);
router.get('/table', teacher_controllar_1.default.getTableTeacher);
router.get('/single-teacher/:id', teacher_controllar_1.default.getSingleTeacher);
router.delete('/delete-teacher/:id', teacher_controllar_1.default.deleteSingleTeacher);
router.patch('/update-single-teacher-by-patch/:id', teacher_controllar_1.default.updateSingleByPatchTeacher);
router.put('/update-single-teacher-by-put/:id', teacher_controllar_1.default.updateSingleByPutTeacher);
exports.teacher_router = router;
