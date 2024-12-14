"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.institution_router = void 0;
const express_1 = __importDefault(require("express"));
const contact_controllar_1 = __importDefault(require("./contact.controllar"));
const router = express_1.default.Router();
router.post('/create-institution', contact_controllar_1.default.createInstitution);
router.get('/', contact_controllar_1.default.getAllInstitution);
router.get('/single-institution/:id', contact_controllar_1.default.getSingleInstitution);
router.delete('/delete-institution/:id', contact_controllar_1.default.deleteSingleInstitution);
router.patch('/update-single-institution-by-patch/:id', contact_controllar_1.default.updateSingleByPatchInstitution);
router.put('/update-single-institution-by-put/:id', contact_controllar_1.default.updateSingleByPutInstitution);
exports.institution_router = router;
