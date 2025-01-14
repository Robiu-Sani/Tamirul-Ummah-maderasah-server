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
const post_model_1 = __importDefault(require("./post.model"));
const createPostIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield post_model_1.default.create(payload);
    return result;
});
const getAllPostIntoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield post_model_1.default.find()
        .populate('studentID')
        .sort({ _id: -1 }) // Sort by _id in descending order
        .limit(100);
    return result;
});
const getPostTableData = (_a) => __awaiter(void 0, [_a], void 0, function* ({ search = '', selectFilter = undefined, skip, limit = 50, }) {
    const totalPosts = yield post_model_1.default.countDocuments();
    const selectedPosts = yield post_model_1.default.countDocuments({ isSelected: true });
    // Build query
    const query = {};
    if (search) {
        query.$or = [
            { postTitle: { $regex: search, $options: 'i' } }, // Search in postTitle
            { 'studentID.studentNameEnglish': { $regex: search, $options: 'i' } }, // Search in studentNameEnglish
        ];
    }
    if (selectFilter) {
        query.isSelected = selectFilter === 'true';
    }
    const data = yield post_model_1.default.find(query)
        .populate({
        path: 'studentID',
        select: 'studentNameEnglish', // Select only the required fields to avoid overpopulation
    })
        .select('studentID createdAt postTitle postDescription isSelected') // Select specific fields for posts
        .limit(limit)
        .skip(skip)
        .lean(); // Use lean for better performance with read-only data
    return {
        totalPosts,
        selectedPosts,
        data,
    };
});
const getSinglePostIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield post_model_1.default.findById(id).populate('studentID');
    return result;
});
const deleteSinglePostIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield post_model_1.default.findByIdAndDelete(id);
    return result;
});
const updateSingleByPatchPostIntoDB = (id, info) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield post_model_1.default.findByIdAndUpdate(id, { $set: info }, { new: true });
    return result;
});
const updateSingleByPutPostIntoDB = (id, info) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield post_model_1.default.findByIdAndUpdate(id, { $set: info }, { new: true });
    return result;
});
const PostDB = {
    createPostIntoDB,
    getAllPostIntoDB,
    getSinglePostIntoDB,
    deleteSinglePostIntoDB,
    updateSingleByPatchPostIntoDB,
    updateSingleByPutPostIntoDB,
    getPostTableData,
};
exports.default = PostDB;
