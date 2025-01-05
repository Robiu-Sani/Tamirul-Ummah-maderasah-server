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
exports.resultControllar = void 0;
const result_services_1 = require("./result.services");
const createResult = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const data = yield result_services_1.resultDB.createResultsIntoDB(payload);
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
const getAllResult = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield result_services_1.resultDB.getAllResultIntoDB(0);
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
const getTableResult = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const skip = parseInt(req.query.skip) || 0;
        const search = req.query.search || '';
        const studentClass = req.query.studentClass || '';
        const data = yield result_services_1.resultDB.getResultTableDataIntoDB(skip, search, studentClass);
        res.json({
            status: true,
            message: 'Result table data fetched successfully',
            data,
        });
    }
    catch (error) {
        res.status(500).json({
            status: false,
            message: 'Failed to fetch result table data',
            error: error instanceof Error ? error.message : 'Unknown error',
        });
    }
});
const getSingleResult = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        // Validate 'id' to ensure it's not undefined or null
        if (!id) {
            res.status(400).json({
                status: false,
                message: 'Invalid or missing ID parameter.',
            });
            return;
        }
        // Fetch the result data from the database
        const data = yield result_services_1.resultDB.getSingleResultIntoDB(id);
        // Ensure 'data' is not null or undefined
        if (!data) {
            res.status(404).json({
                status: false,
                message: 'Result not found for the given ID.',
            });
            return;
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let tutiral = null;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let firstTutiral = null;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let halfYearly = null;
        // If 'exexamName' matches "Half Yearly Exam", fetch additional data
        if (data.examName === 'Half Yearly Exam') {
            tutiral = yield result_services_1.resultDB.getOnlySubjectsNumbersIntoDB(data.studentId, 'First Tutorial');
        }
        if (data.examName === 'Final Exam') {
            tutiral = yield result_services_1.resultDB.getOnlySubjectsNumbersIntoDB(data.studentId, 'Second Tutorial');
            firstTutiral = yield result_services_1.resultDB.getOnlySubjectsNumbersIntoDB(data.studentId, 'First Tutorial');
            halfYearly = yield result_services_1.resultDB.getOnlySubjectsNumbersIntoDB(data.studentId, 'First Tutorial');
        }
        res.json({
            status: true,
            message: 'Result retrieved successfully',
            tutiral: tutiral ? tutiral.subjects : false,
            halfYearly: halfYearly ? halfYearly.subjects : false,
            firstTutiral: firstTutiral ? firstTutiral.subjects : false,
            data,
        });
    }
    catch (err) {
        res.status(500).json({
            status: false,
            message: 'Failed to retrieve the result',
            error: err instanceof Error ? err.message : err,
        });
    }
});
const deleteResult = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield result_services_1.resultDB.deleteResultIntoDB(id);
        res.json({
            status: true,
            message: 'result delete successfully',
            data,
        });
    }
    catch (err) {
        res.json({
            status: false,
            message: 'result is not delete successfully',
            error: err,
        });
    }
});
exports.resultControllar = {
    createResult,
    getAllResult,
    deleteResult,
    getTableResult,
    getSingleResult,
};
