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
const carousel_servece_1 = __importDefault(require("./carousel.servece"));
const createSlider = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const data = yield carousel_servece_1.default.createSliderIntoDB(payload);
        res.json({
            status: true,
            message: 'Slider is posted successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Slider is not created successfully',
            error,
        });
    }
});
const getAllSlider = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield carousel_servece_1.default.getAllSliderIntoDB();
        res.json({
            status: true,
            message: 'All Slider got successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Slider is not get successfully',
            error,
        });
    }
});
const getSingleSlider = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield carousel_servece_1.default.getSingleSliderIntoDB(id);
        res.json({
            status: true,
            message: 'Single Slider got successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single Slider is not get successfully',
            error,
        });
    }
});
const deleteSingleSlider = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield carousel_servece_1.default.deleteSingleSliderIntoDB(id);
        res.json({
            status: true,
            message: 'Single Slider delete successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single Slider is not delete successfully',
            error,
        });
    }
});
const updateSingleByPatchSlider = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const { id } = req.params;
        const data = yield carousel_servece_1.default.updateSingleByPatchSliderIntoDB(id, payload);
        res.json({
            status: true,
            message: 'Single Slider update successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single Slider is not update successfully',
            error,
        });
    }
});
const updateSingleByPutSlider = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const { id } = req.params;
        const data = yield carousel_servece_1.default.updateSingleByPutSliderIntoDB(id, payload);
        res.json({
            status: true,
            message: 'Single Slider update successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single Slider is not update successfully',
            error,
        });
    }
});
const SliderController = {
    createSlider,
    getAllSlider,
    getSingleSlider,
    deleteSingleSlider,
    updateSingleByPatchSlider,
    updateSingleByPutSlider,
};
exports.default = SliderController;
