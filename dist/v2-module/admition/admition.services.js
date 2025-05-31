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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.admitionTutorialExamService = void 0;
const admition_model_1 = require("./admition.model");
exports.admitionTutorialExamService = {
    // Create new exam
    createExam(examData) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield admition_model_1.admitionTutiral.create(examData);
        });
    },
    // Get all exams with pagination and search
    getAllExams(filters, paginationOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            const { searchTerm } = filters, filtersData = __rest(filters, ["searchTerm"]);
            const { page = 1, limit = 10, sortBy, sortOrder } = paginationOptions;
            const query = {};
            if (searchTerm) {
                query.$or = [
                    { examName: { $regex: searchTerm, $options: 'i' } },
                    { 'subject.subjectName': { $regex: searchTerm, $options: 'i' } },
                ];
            }
            // Exact match for other filters
            if (Object.keys(filtersData).length) {
                Object.keys(filtersData).forEach((key) => {
                    query[key] = filtersData[key];
                });
            }
            query.isDeleted = false;
            const skip = (page - 1) * limit;
            const sortOptions = {};
            if (sortBy && sortOrder) {
                sortOptions[sortBy] = sortOrder === 'asc' ? 1 : -1;
            }
            const [data, total] = yield Promise.all([
                admition_model_1.admitionTutiral
                    .find(query)
                    .sort(sortOptions)
                    .skip(skip)
                    .limit(limit)
                    .exec(),
                admition_model_1.admitionTutiral.countDocuments(query),
            ]);
            return {
                data,
                page,
                limit,
                total,
            };
        });
    },
    // Get exams by teacher ID
    getExamsByTeacher(teacherId, paginationOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getAllExams({ teacherId }, paginationOptions);
        });
    },
    // Get exams by user ID
    getExamsByUser(userId, paginationOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getAllExams({ userId }, paginationOptions);
        });
    },
    // Get exams by exam name
    getExamsByName(examName, paginationOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getAllExams({ examName }, paginationOptions);
        });
    },
    // Get exams by year
    getExamsByYear(year, paginationOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getAllExams({ examYear: year }, paginationOptions);
        });
    },
    // Get exams by year with subjects under 33%
    getExamsWithFailedSubjects(year, paginationOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            const { page = 1, limit = 10 } = paginationOptions;
            const skip = (page - 1) * limit;
            const query = {
                examYear: year,
                'subject.parcentage': { $lt: 33 },
                isDeleted: false,
            };
            const [data, total] = yield Promise.all([
                admition_model_1.admitionTutiral.aggregate([
                    { $match: query },
                    {
                        $addFields: {
                            failedSubjectsCount: {
                                $size: {
                                    $filter: {
                                        input: '$subject',
                                        as: 'subj',
                                        cond: { $lt: ['$$subj.parcentage', 33] },
                                    },
                                },
                            },
                        },
                    },
                    {
                        $sort: {
                            failedSubjectsCount: -1,
                            totatlMarks: 1,
                        },
                    },
                    { $skip: skip },
                    { $limit: limit },
                ]),
                admition_model_1.admitionTutiral.countDocuments(query),
            ]);
            return {
                data,
                page,
                limit,
                total,
            };
        });
    },
    // Update exam
    updateExam(id, updateData) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield admition_model_1.admitionTutiral.findByIdAndUpdate(id, updateData, {
                new: true,
            });
        });
    },
    // Delete exam (soft delete)
    deleteExam(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield admition_model_1.admitionTutiral.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
        });
    },
};
