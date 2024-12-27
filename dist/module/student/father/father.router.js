"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.father_router = void 0;
const express_1 = __importDefault(require("express"));
const father_controller_1 = __importDefault(require("./father.controller"));
const router = express_1.default.Router();
router.post('/create-father', father_controller_1.default.createFather);
router.get('/', father_controller_1.default.getAllFather);
router.get('/table', father_controller_1.default.getTableFather);
router.get('/single-father/:id', father_controller_1.default.getSingleFather);
router.delete('/delete-father/:id', father_controller_1.default.deleteSingleFather);
router.patch('/update-single-father-by-patch/:id', father_controller_1.default.updateSingleByPatchFather);
router.put('/update-single-father-by-put/:id', father_controller_1.default.updateSingleByPutFather);
exports.father_router = router;
