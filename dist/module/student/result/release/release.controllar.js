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
const release_services_1 = __importDefault(require("./release.services"));
const createReleaseDate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const data = yield release_services_1.default.createReleaseDateIntoDB(payload);
        res.json({
            status: true,
            message: 'result submited successfully',
            data,
        });
    }
    catch (err) {
        res.json({
            status: false,
            message: 'result is not submited successfully',
            error: err,
        });
    }
});
const getReleaseDate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield release_services_1.default.getReleaseIntoDB();
        res.json({
            status: true,
            message: 'result get successfully',
            data,
        });
    }
    catch (err) {
        res.json({
            status: false,
            message: 'result is not get successfully',
            error: err,
        });
    }
});
const updateSingleReleaseDate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const { id } = req.params;
        const data = yield release_services_1.default.UpdateReleaseIntoDB(id, payload);
        res.json({
            status: true,
            message: 'Single Student update successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single Student is not update successfully',
            error,
        });
    }
});
const releaseControllar = {
    createReleaseDate,
    getReleaseDate,
    updateSingleReleaseDate,
};
exports.default = releaseControllar;
