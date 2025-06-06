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
exports.finalTutorialExamController = void 0;
const final_services_1 = require("./final.services");
exports.finalTutorialExamController = {
    // Create
    createExam(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield final_services_1.healfTutorialExamService.createExam(req.body);
                res.status(201).json({ success: true, data: result });
            }
            catch (err) {
                res
                    .status(500)
                    .json({ success: false, message: 'Failed to create exam', error: err });
            }
        });
    },
    // Get All
    getAllExams(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const filters = req.query;
                const result = yield final_services_1.healfTutorialExamService.getAllExams(filters, filters);
                res.status(200).json({ success: true, data: result });
            }
            catch (err) {
                res
                    .status(500)
                    .json({ success: false, message: 'Failed to get exams', error: err });
            }
        });
    },
    // Get by teacher ID
    getByTeacher(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { teacherId } = req.params;
                const result = yield final_services_1.healfTutorialExamService.getExamsByTeacher(teacherId, req.query);
                res.status(200).json({ success: true, data: result });
            }
            catch (err) {
                res
                    .status(500)
                    .json({
                    success: false,
                    message: 'Failed to get exams by teacher',
                    error: err,
                });
            }
        });
    },
    // Get by user ID
    getByUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { userId } = req.params;
                const result = yield final_services_1.healfTutorialExamService.getExamsByUser(userId, req.query);
                res.status(200).json({ success: true, data: result });
            }
            catch (err) {
                res
                    .status(500)
                    .json({
                    success: false,
                    message: 'Failed to get exams by user',
                    error: err,
                });
            }
        });
    },
    // Get by name
    getByExamName(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { examName } = req.params;
                const result = yield final_services_1.healfTutorialExamService.getExamsByName(examName, req.query);
                res.status(200).json({ success: true, data: result });
            }
            catch (err) {
                res
                    .status(500)
                    .json({
                    success: false,
                    message: 'Failed to get exams by name',
                    error: err,
                });
            }
        });
    },
    // Get by year
    getByYear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { year } = req.params;
                const result = yield final_services_1.healfTutorialExamService.getExamsByYear(+year, req.query);
                res.status(200).json({ success: true, data: result });
            }
            catch (err) {
                res
                    .status(500)
                    .json({
                    success: false,
                    message: 'Failed to get exams by year',
                    error: err,
                });
            }
        });
    },
    // Get exams with failed subjects
    getFailedSubjects(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { year } = req.params;
                const result = yield final_services_1.healfTutorialExamService.getExamsWithFailedSubjects(+year, req.query);
                res.status(200).json({ success: true, data: result });
            }
            catch (err) {
                res
                    .status(500)
                    .json({
                    success: false,
                    message: 'Failed to get failed subject exams',
                    error: err,
                });
            }
        });
    },
    // Update
    updateExam(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const result = yield final_services_1.healfTutorialExamService.updateExam(id, req.body);
                res.status(200).json({ success: true, data: result });
            }
            catch (err) {
                res
                    .status(500)
                    .json({ success: false, message: 'Failed to update exam', error: err });
            }
        });
    },
    // Soft Delete
    deleteExam(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const result = yield final_services_1.healfTutorialExamService.deleteExam(id);
                res.status(200).json({ success: true, data: result });
            }
            catch (err) {
                res
                    .status(500)
                    .json({ success: false, message: 'Failed to delete exam', error: err });
            }
        });
    },
};
