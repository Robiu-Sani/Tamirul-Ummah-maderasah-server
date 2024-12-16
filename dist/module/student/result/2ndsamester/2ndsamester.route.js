"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.secendSamister_router = void 0;
const express_1 = __importDefault(require("express"));
const _2ndsamester_controllar_1 = __importDefault(require("./2ndsamester.controllar"));
const router = express_1.default.Router();
router.post('/create-secendSamister', _2ndsamester_controllar_1.default.createSecendSamister);
router.get('/', _2ndsamester_controllar_1.default.getAllSecendSamister);
router.get('/single-secendSamister/:id', _2ndsamester_controllar_1.default.getSingleSecendSamister);
router.delete('/delete-secendSamister/:id', _2ndsamester_controllar_1.default.deleteSingleSecendSamister);
router.patch('/update-single-secendSamister-by-patch/:id', _2ndsamester_controllar_1.default.updateSingleByPatchSecendSamister);
router.put('/update-single-secendSamister-by-put/:id', _2ndsamester_controllar_1.default.updateSingleByPutSecendSamister);
exports.secendSamister_router = router;
