"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// Mongoose schema
const classSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    nameBangla: { type: String, required: true },
    code: { type: String, required: false },
    isDeleted: { type: Boolean, default: false },
}, {
    timestamps: true, // optional: adds createdAt and updatedAt
});
// Mongoose model
const ClassModel = (0, mongoose_1.model)('Class', classSchema);
exports.default = ClassModel;
