"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.image_router = void 0;
const express_1 = __importDefault(require("express"));
const image_controllar_1 = __importDefault(require("./image.controllar"));
const router = express_1.default.Router();
router.post('/create-image', image_controllar_1.default.createImage);
router.get('/', image_controllar_1.default.getImage);
router.get('/client', image_controllar_1.default.getClientImages);
exports.image_router = router;
