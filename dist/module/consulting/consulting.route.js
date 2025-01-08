"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.consult_router = void 0;
const express_1 = __importDefault(require("express"));
const consulting_controllar_1 = __importDefault(require("./consulting.controllar"));
const router = express_1.default.Router();
router.post('/create-consulting', consulting_controllar_1.default.createConsult);
exports.consult_router = router;
