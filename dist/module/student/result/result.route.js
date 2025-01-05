"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.result_router = void 0;
const express_1 = __importDefault(require("express"));
const result_controllar_1 = require("./result.controllar");
const router = express_1.default.Router();
router.post('/create-exam-result', result_controllar_1.resultControllar.createResult);
router.get('/table', result_controllar_1.resultControllar.getTableResult);
router.get('/', result_controllar_1.resultControllar.getAllResult);
router.get('/get-single-result/:id', result_controllar_1.resultControllar.getSingleResult);
router.delete('/delete-single-result/:id', result_controllar_1.resultControllar.deleteResult);
exports.result_router = router;
