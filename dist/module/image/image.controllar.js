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
const image_service_1 = __importDefault(require("./image.service"));
const createImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const data = yield image_service_1.default.createImagesIntoDB(payload);
        res.json({
            status: true,
            message: 'image is posted successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'image is not created successfully',
            error,
        });
    }
});
const getImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const skip = Number(req.query);
        const data = yield image_service_1.default.getImagesIntoDB(skip);
        res.json({
            status: true,
            message: 'image is get successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'image is not get successfully',
            error,
        });
    }
});
const getClientImages = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield image_service_1.default.getClientImagesIntoDB();
        res.json({
            status: true,
            message: 'image is get successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'image is not get successfully',
            error,
        });
    }
});
const deleteImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield image_service_1.default.deleteImageIntoDB(id);
        res.json({
            status: true,
            message: 'image is delete successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'image is not delete successfully',
            error,
        });
    }
});
const imageControllar = {
    createImage,
    getImage,
    deleteImage,
    getClientImages,
};
exports.default = imageControllar;
