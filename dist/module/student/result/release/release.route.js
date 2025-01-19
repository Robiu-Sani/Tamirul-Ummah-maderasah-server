"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.release_route = void 0;
const express_1 = __importDefault(require("express"));
const release_controllar_1 = __importDefault(require("./release.controllar"));
const router = express_1.default.Router();
router.post('/create-date', release_controllar_1.default.createReleaseDate);
router.get('/', release_controllar_1.default.getReleaseDate);
router.patch('/update/:id', release_controllar_1.default.updateSingleReleaseDate);
exports.release_route = router;
