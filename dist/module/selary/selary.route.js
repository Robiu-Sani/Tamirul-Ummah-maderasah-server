"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.selary_router = void 0;
const express_1 = __importDefault(require("express"));
const selary_controllar_1 = __importDefault(require("./selary.controllar"));
const router = express_1.default.Router();
router.post('/create-selary', selary_controllar_1.default.createSelary);
router.get('/', selary_controllar_1.default.getAllSelary);
router.get('/single-selary/:id', selary_controllar_1.default.getSingleSelary);
router.delete('/delete-selary/:id', selary_controllar_1.default.deleteSingleSelary);
router.patch('/update-single-selary-by-patch/:id', selary_controllar_1.default.updateSingleByPatchSelary);
router.put('/update-single-selary-by-put/:id', selary_controllar_1.default.updateSingleByPutSelary);
exports.selary_router = router;
