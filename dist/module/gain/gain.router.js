"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gain_router = void 0;
const express_1 = __importDefault(require("express"));
const gain_controllar_1 = __importDefault(require("./gain.controllar"));
const router = express_1.default.Router();
router.post('/create-gain', gain_controllar_1.default.createGain);
router.get('/', gain_controllar_1.default.getAllgain);
router.patch('/update-gain/:id', gain_controllar_1.default.updateGain);
router.delete('/delete-gain/:id', gain_controllar_1.default.deletGain);
exports.gain_router = router;
