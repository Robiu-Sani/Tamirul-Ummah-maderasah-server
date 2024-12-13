"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.notice_router = void 0;
const express_1 = __importDefault(require("express"));
const notice_controllar_1 = __importDefault(require("./notice.controllar"));
const router = express_1.default.Router();
router.post('/create-notice', notice_controllar_1.default.createNotice);
router.get('/', notice_controllar_1.default.getAllNotice);
router.get('/single-notice/:id', notice_controllar_1.default.getSingleNotice);
router.delete('/delete-notice/:id', notice_controllar_1.default.deleteSingleNotice);
router.patch('/update-single-notice-by-patch/:id', notice_controllar_1.default.updateSingleByPatchNotice);
router.put('/update-single-notice-by-put/:id', notice_controllar_1.default.updateSingleByPutNotice);
exports.notice_router = router;
