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
        const data = result_services_1.resultDB.createResultsIntoDB(payload);
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
exports.resultControllar = {
    createResult,
};
