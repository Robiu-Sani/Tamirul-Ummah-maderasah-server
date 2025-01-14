"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth_route = void 0;
const express_1 = __importDefault(require("express"));
const auth_controllar_1 = __importDefault(require("./auth.controllar"));
const router = express_1.default.Router();
router.post('/student', auth_controllar_1.default.authStudentControllar);
router.post('/teacher', auth_controllar_1.default.authTeacherControllar);
exports.auth_route = router;
