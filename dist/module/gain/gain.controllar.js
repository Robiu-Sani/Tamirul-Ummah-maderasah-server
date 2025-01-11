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
const gain_services_1 = __importDefault(require("./gain.services"));
const createGain = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const data = yield gain_services_1.default.createGainIntoDB(payload);
        res.json({
            status: true,
            message: 'our-gain created successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'our-gain is not created successfully',
            error,
        });
    }
});
const getAllgain = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield gain_services_1.default.getAllGainIntoDB();
        res.json({
            status: true,
            message: 'All gain got successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'gain is not get successfully',
            error,
        });
    }
});
const updateGain = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const { id } = req.params;
        const data = yield gain_services_1.default.updateGainIntoDB(payload, id);
        res.json({
            status: true,
            message: 'Single gain update successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single gain is not update successfully',
            error,
        });
    }
});
const deletGain = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield gain_services_1.default.deleteGainIntoDB(id);
        res.json({
            status: true,
            message: 'Single gain delete successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single gain is not delete successfully',
            error,
        });
    }
});
const gainControllar = {
    createGain,
    getAllgain,
    updateGain,
    deletGain,
};
exports.default = gainControllar;
