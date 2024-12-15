"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gairdean_router = void 0;
const express_1 = __importDefault(require("express"));
const gairdean_controllar_1 = __importDefault(require("./gairdean.controllar"));
const router = express_1.default.Router();
router.post('/create-gairdean', gairdean_controllar_1.default.createGairdean);
router.get('/', gairdean_controllar_1.default.getAllGairdean);
router.get('/single-gairdean/:id', gairdean_controllar_1.default.getSingleGairdean);
router.delete('/delete-gairdean/:id', gairdean_controllar_1.default.deleteSingleGairdean);
router.patch('/update-single-gairdean-by-patch/:id', gairdean_controllar_1.default.updateSingleByPatchGairdean);
router.put('/update-single-gairdean-by-put/:id', gairdean_controllar_1.default.updateSingleByPutGairdean);
exports.Gairdean_router = router;
