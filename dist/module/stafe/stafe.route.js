"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stafe_router = void 0;
const express_1 = __importDefault(require("express"));
const stafe_controllar_1 = __importDefault(require("./stafe.controllar"));
const router = express_1.default.Router();
router.post('/create-stafe', stafe_controllar_1.default.createStafe);
router.get('/', stafe_controllar_1.default.getAllStafe);
router.get('/client', stafe_controllar_1.default.staffClientSide);
router.get('/table', stafe_controllar_1.default.getTableStaff);
router.get('/single-stafe/:id', stafe_controllar_1.default.getSingleStafe);
router.delete('/delete-stafe/:id', stafe_controllar_1.default.deleteSingleStafe);
router.patch('/update-single-stafe-by-patch/:id', stafe_controllar_1.default.updateSingleByPatchStafe);
router.put('/update-single-stafe-by-put/:id', stafe_controllar_1.default.updateSingleByPutStafe);
exports.stafe_router = router;
