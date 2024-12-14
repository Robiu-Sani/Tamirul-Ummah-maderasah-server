"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.slide_router = void 0;
const express_1 = __importDefault(require("express"));
const carousel_controllar_1 = __importDefault(require("./carousel.controllar"));
const router = express_1.default.Router();
router.post('/create-slide', carousel_controllar_1.default.createSlider);
router.get('/', carousel_controllar_1.default.getAllSlider);
router.get('/single-slide/:id', carousel_controllar_1.default.getSingleSlider);
router.delete('/delete-slide/:id', carousel_controllar_1.default.deleteSingleSlider);
router.patch('/update-single-slide-by-patch/:id', carousel_controllar_1.default.updateSingleByPatchSlider);
router.put('/update-single-slide-by-put/:id', carousel_controllar_1.default.updateSingleByPutSlider);
exports.slide_router = router;
