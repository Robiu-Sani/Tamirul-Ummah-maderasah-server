"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const subjectSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
}, {
    timestamps: true,
});
const SubjectModel = (0, mongoose_1.model)('Subject', subjectSchema);
exports.default = SubjectModel;
