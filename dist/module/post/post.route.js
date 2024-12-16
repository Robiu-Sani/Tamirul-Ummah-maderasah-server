"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.post_router = void 0;
const express_1 = __importDefault(require("express"));
const post_controllar_1 = __importDefault(require("./post.controllar"));
const router = express_1.default.Router();
router.post('/create-post', post_controllar_1.default.createPost);
router.get('/', post_controllar_1.default.getAllPost);
router.get('/single-post/:id', post_controllar_1.default.getSinglePost);
router.delete('/delete-post/:id', post_controllar_1.default.deleteSinglePost);
router.patch('/update-single-post-by-patch/:id', post_controllar_1.default.updateSingleByPatchPost);
router.put('/update-single-post-by-put/:id', post_controllar_1.default.updateSingleByPutPost);
exports.post_router = router;
