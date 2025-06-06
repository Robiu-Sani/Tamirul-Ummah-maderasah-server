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
const consulting_services_1 = __importDefault(require("./consulting.services"));
const createConsult = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const data = yield consulting_services_1.default.createConsultIntoDB(payload);
        res.json({
            status: true,
            message: 'data got successuflly',
            data,
        });
    }
    catch (err) {
        res.json({
            status: true,
            message: 'data got successuflly',
            error: err,
        });
    }
});
const getConsult = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield consulting_services_1.default.getConsultIntoDB();
        res.json({
            status: true,
            message: 'data got successuflly',
            data,
        });
    }
    catch (err) {
        res.json({
            status: true,
            message: 'data got successuflly',
            error: err,
        });
    }
});
const deleteConsult = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield consulting_services_1.default.deleteConsultIntoDB(id);
        res.json({
            status: true,
            message: 'data got successuflly',
            data,
        });
    }
    catch (err) {
        res.json({
            status: true,
            message: 'data got successuflly',
            error: err,
        });
    }
});
const getbycategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { cetagory } = req.params;
        const data = yield consulting_services_1.default.messagesCategoryDB(cetagory);
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
const consultControllar = {
    createConsult,
    getConsult,
    deleteConsult,
    getbycategory,
};
exports.default = consultControllar;
