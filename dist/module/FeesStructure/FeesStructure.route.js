"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.feesStructure_router = void 0;
const express_1 = __importDefault(require("express"));
const FeesStructure_controllar_1 = __importDefault(require("./FeesStructure.controllar"));
const router = express_1.default.Router();
router.post('/create-feesStructure', FeesStructure_controllar_1.default.createFeesStructure);
router.get('/', FeesStructure_controllar_1.default.getAllFeesStructure);
router.get('/single-feesStructure/:id', FeesStructure_controllar_1.default.getSingleFeesStructure);
router.delete('/delete-feesStructure/:id', FeesStructure_controllar_1.default.deleteSingleFeesStructure);
router.patch('/update-single-feesStructure-by-patch/:id', FeesStructure_controllar_1.default.updateSingleByPatchFeesStructure);
router.put('/update-single-feesStructure-by-put/:id', FeesStructure_controllar_1.default.updateSingleByPutFeesStructure);
exports.feesStructure_router = router;
