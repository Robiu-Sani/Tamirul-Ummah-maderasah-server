"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fee_router = void 0;
const express_1 = __importDefault(require("express"));
const fee_controllar_1 = __importDefault(require("./fee.controllar"));
const router = express_1.default.Router();
router.post('/create-fee', fee_controllar_1.default.createFee);
router.get('/', fee_controllar_1.default.getAllFee);
router.get('/single-fee/:id', fee_controllar_1.default.getSingleFee);
router.delete('/delete-fee/:id', fee_controllar_1.default.deleteSingleFee);
router.patch('/update-single-fee-by-patch/:id', fee_controllar_1.default.updateSingleByPatchFee);
router.put('/update-single-fee-by-put/:id', fee_controllar_1.default.updateSingleByPutFee);
exports.Fee_router = router;
