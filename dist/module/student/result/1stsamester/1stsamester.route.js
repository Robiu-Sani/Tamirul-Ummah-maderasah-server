"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.firstSamister_router = void 0;
const express_1 = __importDefault(require("express"));
const _1stsamester_controllar_1 = __importDefault(require("./1stsamester.controllar"));
const router = express_1.default.Router();
router.post('/create-firstSamister', _1stsamester_controllar_1.default.createFirstSamister);
router.get('/', _1stsamester_controllar_1.default.getAllFirstSamister);
router.get('/single-firstSamister/:id', _1stsamester_controllar_1.default.getSingleFirstSamister);
router.delete('/delete-firstSamister/:id', _1stsamester_controllar_1.default.deleteSingleFirstSamister);
router.patch('/update-single-firstSamister-by-patch/:id', _1stsamester_controllar_1.default.updateSingleByPatchFirstSamister);
router.put('/update-single-firstSamister-by-put/:id', _1stsamester_controllar_1.default.updateSingleByPutFirstSamister);
exports.firstSamister_router = router;
