"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.notifection_router = void 0;
const express_1 = __importDefault(require("express"));
const notifection_controllar_1 = __importDefault(require("./notifection.controllar"));
const router = express_1.default.Router();
router.post('/create-notifection', notifection_controllar_1.default.createNotifection);
router.get('/', notifection_controllar_1.default.getAllNotifection);
router.get('/box', notifection_controllar_1.default.noticectionBox);
router.get('/admition', notifection_controllar_1.default.noticectionAdmition);
router.get('/alert', notifection_controllar_1.default.noticectionAlert);
router.get('/single-notifection/:id', notifection_controllar_1.default.getSingleNotifection);
router.delete('/delete-notifection/:id', notifection_controllar_1.default.deleteSingleNotifection);
router.patch('/update-single-notifection-by-patch/:id', notifection_controllar_1.default.updateSingleByPatchNotifection);
router.put('/update-single-notifection-by-put/:id', notifection_controllar_1.default.updateSingleByPutNotifection);
exports.notifection_router = router;
