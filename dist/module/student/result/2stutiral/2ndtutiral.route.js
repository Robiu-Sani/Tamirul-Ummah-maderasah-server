"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.secendTutiral_router = void 0;
const express_1 = __importDefault(require("express"));
const _2ndtutiral_controllar_1 = __importDefault(require("./2ndtutiral.controllar"));
const router = express_1.default.Router();
router.post('/create-secendTutiral', _2ndtutiral_controllar_1.default.createSecendTutiral);
router.get('/', _2ndtutiral_controllar_1.default.getAllSecendTutiral);
router.get('/single-secendTutiral/:id', _2ndtutiral_controllar_1.default.getSingleSecendTutiral);
router.delete('/delete-secendTutiral/:id', _2ndtutiral_controllar_1.default.deleteSingleSecendTutiral);
router.patch('/update-single-secendTutiral-by-patch/:id', _2ndtutiral_controllar_1.default.updateSingleByPatchSecendTutiral);
router.put('/update-single-secendTutiral-by-put/:id', _2ndtutiral_controllar_1.default.updateSingleByPutSecendTutiral);
exports.secendTutiral_router = router;
