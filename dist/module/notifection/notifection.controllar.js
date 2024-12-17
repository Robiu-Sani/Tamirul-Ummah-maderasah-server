"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const notifection_service_1 = __importDefault(require("./notifection.service"));
const createNotifection = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const data = yield notifection_service_1.default.createNotifectionIntoDB(payload);
        res.json({
            status: true,
            message: 'Notifection is Notifection successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Notifection is not created successfully',
            error,
        });
    }
});
const getAllNotifection = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield notifection_service_1.default.getAllNotifectionIntoDB();
        res.json({
            status: true,
            message: 'All Notifection got successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Notifection is not get successfully',
            error,
        });
    }
});
const getSingleNotifection = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield notifection_service_1.default.getSingleNotifectionIntoDB(id);
        res.json({
            status: true,
            message: 'Single Notifection got successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single Notifection is not get successfully',
            error,
        });
    }
});
const deleteSingleNotifection = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield notifection_service_1.default.deleteSingleNotifectionIntoDB(id);
        res.json({
            status: true,
            message: 'Single Notifection delete successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single Notifection is not delete successfully',
            error,
        });
    }
});
const updateSingleByPatchNotifection = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const { id } = req.params;
        const data = yield notifection_service_1.default.updateSingleByPatchNotifectionIntoDB(id, payload);
        res.json({
            status: true,
            message: 'Single Notifection update successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single Notifection is not update successfully',
            error,
        });
    }
});
const updateSingleByPutNotifection = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const { id } = req.params;
        const data = yield notifection_service_1.default.updateSingleByPutNotifectionIntoDB(id, payload);
        res.json({
            status: true,
            message: 'Single Notifection update successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single Notifection is not update successfully',
            error,
        });
    }
});
const NotifectionController = {
    createNotifection,
    getAllNotifection,
    getSingleNotifection,
    deleteSingleNotifection,
    updateSingleByPatchNotifection,
    updateSingleByPutNotifection,
};
exports.default = NotifectionController;
