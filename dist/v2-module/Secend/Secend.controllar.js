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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecendTutorialExamController = void 0;
const Secend_services_1 = require("./Secend.services");
const SecendTutorialExamController = () => {
    return {
        // Create new exam
        createExam(req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const examData = req.body;
                    const result = yield Secend_services_1.SecendTutorialExamService.createExam(examData);
                    res.status(201).json({
                        success: true,
                        message: 'Exam created successfully',
                        data: result,
                    });
                }
                catch (error) {
                    res.status(500).json({
                        success: false,
                        message: 'Error creating exam',
                        error: error instanceof Error ? error.message : error,
                    });
                }
            });
        },
        // Get all exams with pagination
        getAllExams(req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const filters = Object.assign({ searchTerm: req.query.searchTerm }, req.query);
                    const paginationOptions = {
                        page: parseInt(req.query.page) || 1,
                        limit: parseInt(req.query.limit) || 10,
                        sortBy: req.query.sortBy,
                        sortOrder: req.query.sortOrder,
                    };
                    const result = yield Secend_services_1.SecendTutorialExamService.getAllExams(filters, paginationOptions);
                    res.status(200).json({
                        success: true,
                        message: 'Exams retrieved successfully',
                        meta: {
                            page: result.page,
                            limit: result.limit,
                            total: result.total,
                        },
                        data: result.data,
                    });
                }
                catch (error) {
                    res.status(500).json({
                        success: false,
                        message: 'Error retrieving exams',
                        error: error instanceof Error ? error.message : error,
                    });
                }
            });
        },
        // Get exams by teacher ID
        getExamsByTeacher(req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const { teacherId } = req.params;
                    const paginationOptions = {
                        page: parseInt(req.query.page) || 1,
                        limit: parseInt(req.query.limit) || 10,
                        sortBy: req.query.sortBy,
                        sortOrder: req.query.sortOrder,
                    };
                    const result = yield Secend_services_1.SecendTutorialExamService.getExamsByTeacher(teacherId, paginationOptions);
                    res.status(200).json({
                        success: true,
                        message: 'Teacher exams retrieved successfully',
                        meta: {
                            page: result.page,
                            limit: result.limit,
                            total: result.total,
                        },
                        data: result.data,
                    });
                }
                catch (error) {
                    res.status(500).json({
                        success: false,
                        message: 'Error retrieving teacher exams',
                        error: error instanceof Error ? error.message : error,
                    });
                }
            });
        },
        // Get exams by user ID
        getExamsByUser(req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const { userId } = req.params;
                    const paginationOptions = {
                        page: parseInt(req.query.page) || 1,
                        limit: parseInt(req.query.limit) || 10,
                        sortBy: req.query.sortBy,
                        sortOrder: req.query.sortOrder,
                    };
                    const result = yield Secend_services_1.SecendTutorialExamService.getExamsByUser(userId, paginationOptions);
                    res.status(200).json({
                        success: true,
                        message: 'User exams retrieved successfully',
                        meta: {
                            page: result.page,
                            limit: result.limit,
                            total: result.total,
                        },
                        data: result.data,
                    });
                }
                catch (error) {
                    res.status(500).json({
                        success: false,
                        message: 'Error retrieving user exams',
                        error: error instanceof Error ? error.message : error,
                    });
                }
            });
        },
        // Get exams by exam name
        getExamsByName(req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const { examName } = req.params;
                    const paginationOptions = {
                        page: parseInt(req.query.page) || 1,
                        limit: parseInt(req.query.limit) || 10,
                        sortBy: req.query.sortBy,
                        sortOrder: req.query.sortOrder,
                    };
                    const result = yield Secend_services_1.SecendTutorialExamService.getExamsByName(examName, paginationOptions);
                    res.status(200).json({
                        success: true,
                        message: 'Exams by name retrieved successfully',
                        meta: {
                            page: result.page,
                            limit: result.limit,
                            total: result.total,
                        },
                        data: result.data,
                    });
                }
                catch (error) {
                    res.status(500).json({
                        success: false,
                        message: 'Error retrieving exams by name',
                        error: error instanceof Error ? error.message : error,
                    });
                }
            });
        },
        // Get exams by year
        getExamsByYear(req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const { year } = req.params;
                    const paginationOptions = {
                        page: parseInt(req.query.page) || 1,
                        limit: parseInt(req.query.limit) || 10,
                        sortBy: req.query.sortBy,
                        sortOrder: req.query.sortOrder,
                    };
                    const result = yield Secend_services_1.SecendTutorialExamService.getExamsByYear(parseInt(year), paginationOptions);
                    res.status(200).json({
                        success: true,
                        message: 'Exams by year retrieved successfully',
                        meta: {
                            page: result.page,
                            limit: result.limit,
                            total: result.total,
                        },
                        data: result.data,
                    });
                }
                catch (error) {
                    res.status(500).json({
                        success: false,
                        message: 'Error retrieving exams by year',
                        error: error instanceof Error ? error.message : error,
                    });
                }
            });
        },
        // Get exams with subjects under 33%
        getExamsWithFailedSubjects(req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const { year } = req.params;
                    const paginationOptions = {
                        page: parseInt(req.query.page) || 1,
                        limit: parseInt(req.query.limit) || 10,
                    };
                    const result = yield Secend_services_1.SecendTutorialExamService.getExamsWithFailedSubjects(parseInt(year), paginationOptions);
                    res.status(200).json({
                        success: true,
                        message: 'Exams with failed subjects retrieved successfully',
                        meta: {
                            page: result.page,
                            limit: result.limit,
                            total: result.total,
                        },
                        data: result.data,
                    });
                }
                catch (error) {
                    res.status(500).json({
                        success: false,
                        message: 'Error retrieving exams with failed subjects',
                        error: error instanceof Error ? error.message : error,
                    });
                }
            });
        },
        // Update exam
        updateExam(req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const { id } = req.params;
                    const updateData = req.body;
                    const result = yield Secend_services_1.SecendTutorialExamService.updateExam(id, updateData);
                    if (!result) {
                        return res.status(404).json({
                            success: false,
                            message: 'Exam not found',
                        });
                    }
                    res.status(200).json({
                        success: true,
                        message: 'Exam updated successfully',
                        data: result,
                    });
                }
                catch (error) {
                    res.status(500).json({
                        success: false,
                        message: 'Error updating exam',
                        error: error instanceof Error ? error.message : error,
                    });
                }
            });
        },
        // Delete exam
        deleteExam(req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const { id } = req.params;
                    const result = yield Secend_services_1.SecendTutorialExamService.deleteExam(id);
                    if (!result) {
                        return res.status(404).json({
                            success: false,
                            message: 'Exam not found',
                        });
                    }
                    res.status(200).json({
                        success: true,
                        message: 'Exam deleted successfully',
                        data: result,
                    });
                }
                catch (error) {
                    res.status(500).json({
                        success: false,
                        message: 'Error deleting exam',
                        error: error instanceof Error ? error.message : error,
                    });
                }
            });
        },
    };
};
exports.SecendTutorialExamController = SecendTutorialExamController;
