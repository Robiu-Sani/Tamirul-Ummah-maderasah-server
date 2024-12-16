"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.firstTutiral_router = void 0;
const express_1 = __importDefault(require("express"));
const _1stutiral_controllar_1 = __importDefault(require("./1stutiral.controllar"));
const router = express_1.default.Router();
router.post('/create-firstTutiral', _1stutiral_controllar_1.default.createFirstTutiral);
router.get('/', _1stutiral_controllar_1.default.getAllFirstTutiral);
router.get('/single-firstTutiral/:id', _1stutiral_controllar_1.default.getSingleFirstTutiral);
router.delete('/delete-firstTutiral/:id', _1stutiral_controllar_1.default.deleteSingleFirstTutiral);
router.patch('/update-single-firstTutiral-by-patch/:id', _1stutiral_controllar_1.default.updateSingleByPatchFirstTutiral);
router.put('/update-single-firstTutiral-by-put/:id', _1stutiral_controllar_1.default.updateSingleByPutFirstTutiral);
exports.firstTutiral_router = router;
