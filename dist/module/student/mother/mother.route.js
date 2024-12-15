"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mother_router = void 0;
const express_1 = __importDefault(require("express"));
const mother_controller_1 = __importDefault(require("./mother.controller"));
const router = express_1.default.Router();
router.post('/create-mother', mother_controller_1.default.createMother);
router.get('/', mother_controller_1.default.getAllMother);
router.get('/single-mother/:id', mother_controller_1.default.getSingleMother);
router.delete('/delete-mother/:id', mother_controller_1.default.deleteSingleMother);
router.patch('/update-single-mother-by-patch/:id', mother_controller_1.default.updateSingleByPatchMother);
router.put('/update-single-mother-by-put/:id', mother_controller_1.default.updateSingleByPutMother);
exports.Mother_router = router;
