"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.about_router = void 0;
const express_1 = __importDefault(require("express"));
const about_controllar_1 = __importDefault(require("./about.controllar"));
const router = express_1.default.Router();
router.post('/create-about', about_controllar_1.default.createAbout);
router.get('/', about_controllar_1.default.getAllAbout);
router.get('/banner', about_controllar_1.default.getBannerData);
router.get('/single-about/:id', about_controllar_1.default.getSingleAbout);
router.delete('/delete-about/:id', about_controllar_1.default.deleteSingleAbout);
router.patch('/update-single-about-by-patch/:id', about_controllar_1.default.updateSingleByPatchAbout);
router.put('/update-single-about-by-put/:id', about_controllar_1.default.updateSingleByPutAbout);
exports.about_router = router;
