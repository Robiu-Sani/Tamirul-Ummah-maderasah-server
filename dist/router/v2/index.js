"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.v2Route = void 0;
const express_1 = __importDefault(require("express"));
const firstTu_router_1 = require("../../v2-module/firstTu/firstTu.router");
const Secend_router_1 = require("../../v2-module/Secend/Secend.router");
const modeltest_router_1 = require("../../v2-module/modeltest/modeltest.router");
const test_router_1 = require("../../v2-module/test/test.router");
const admition_router_1 = require("../../v2-module/admition/admition.router");
const Healf_router_1 = require("../../v2-module/Healf/Healf.router");
const final_router_1 = require("../../v2-module/final/final.router");
const router = express_1.default.Router();
const moduleRoute = [
    {
        path: '/first_tutiral',
        route: firstTu_router_1.first_tutiral,
    },
    {
        path: '/second_tutiral',
        route: Secend_router_1.Secend_tutiral,
    },
    {
        path: '/modeltest',
        route: modeltest_router_1.modeltest,
    },
    {
        path: '/test',
        route: test_router_1.test_tutiral,
    },
    {
        path: '/admition_exam',
        route: admition_router_1.admition_tutiral,
    },
    {
        path: '/healf-year-exam',
        route: Healf_router_1.healf_year_exam,
    },
    {
        path: '/final-exam',
        route: final_router_1.final_exam,
    },
];
moduleRoute.forEach((route) => router.use(route.path, route.route));
exports.v2Route = router;
