"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const v1_1 = require("./router/v1");
const v2_1 = require("./router/v2");
const app = (0, express_1.default)();
//parser
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//applycation v1 routes
app.use('/api/v1', v1_1.v1Route);
app.use('/api/v2', v2_1.v2Route);
app.get('/', (req, res) => {
    res.send('Tamirul Ummah Maderasah Server');
});
exports.default = app;
