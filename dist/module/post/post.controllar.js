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
const post_service_1 = __importDefault(require("./post.service"));
const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const data = yield post_service_1.default.createPostIntoDB(payload);
        res.json({
            status: true,
            message: 'Post is posted successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Post is not created successfully',
            error,
        });
    }
});
const getAllPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield post_service_1.default.getAllPostIntoDB();
        res.json({
            status: true,
            message: 'All Post got successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Post is not get successfully',
            error,
        });
    }
});
const getSinglePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield post_service_1.default.getSinglePostIntoDB(id);
        res.json({
            status: true,
            message: 'Single Post got successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single Post is not get successfully',
            error,
        });
    }
});
const deleteSinglePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield post_service_1.default.deleteSinglePostIntoDB(id);
        res.json({
            status: true,
            message: 'Single Post delete successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single Post is not delete successfully',
            error,
        });
    }
});
const updateSingleByPatchPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const { id } = req.params;
        const data = yield post_service_1.default.updateSingleByPatchPostIntoDB(id, payload);
        res.json({
            status: true,
            message: 'Single Post update successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single Post is not update successfully',
            error,
        });
    }
});
const updateSingleByPutPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const { id } = req.params;
        const data = yield post_service_1.default.updateSingleByPutPostIntoDB(id, payload);
        res.json({
            status: true,
            message: 'Single Post update successfully',
            data,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Single Post is not update successfully',
            error,
        });
    }
});
const PostController = {
    createPost,
    getAllPost,
    getSinglePost,
    deleteSinglePost,
    updateSingleByPatchPost,
    updateSingleByPutPost,
};
exports.default = PostController;
