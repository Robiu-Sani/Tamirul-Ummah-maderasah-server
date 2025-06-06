"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.v1Route = void 0;
const express_1 = __importDefault(require("express"));
const notice_route_1 = require("../../module/notices/notice.route");
const auth_route_1 = require("../../module/auth/auth.route");
const contact_route_1 = require("../../module/contact-info/contact.route");
const carousel_route_1 = require("../../module/carousel/carousel.route");
const student_route_1 = require("../../module/student/student.route");
const father_router_1 = require("../../module/student/father/father.router");
const mother_route_1 = require("../../module/student/mother/mother.route");
const gairdean_route_1 = require("../../module/student/gairdean/gairdean.route");
const teacher_route_1 = require("../../module/teacher/teacher.route");
const stafe_route_1 = require("../../module/stafe/stafe.route");
const fee_route_1 = require("../../module/student/education-fee/fee.route");
const post_route_1 = require("../../module/post/post.route");
const result_route_1 = require("../../module/student/result/result.route");
const FeesStructure_route_1 = require("../../module/FeesStructure/FeesStructure.route");
const selary_route_1 = require("../../module/selary/selary.route");
const notifection_route_1 = require("../../module/notifection/notifection.route");
const about_route_1 = require("../../module/about-institute/about.route");
const consulting_route_1 = require("../../module/consulting/consulting.route");
const gain_router_1 = require("../../module/gain/gain.router");
const image_route_1 = require("../../module/image/image.route");
const release_route_1 = require("../../module/student/result/release/release.route");
const user_router_1 = require("../../module/user/user.router");
const class_router_1 = require("../../module/class/class.router");
const subject_router_1 = require("../../module/subject/subject.router");
const router = express_1.default.Router();
const moduleRoute = [
    {
        path: '/notice',
        route: notice_route_1.notice_router,
    },
    {
        path: '/auth',
        route: auth_route_1.auth_route,
    },
    {
        path: '/institution',
        route: contact_route_1.institution_router,
    },
    {
        path: '/slide',
        route: carousel_route_1.slide_router,
    },
    {
        path: '/student',
        route: student_route_1.student_router,
    },
    {
        path: '/father',
        route: father_router_1.father_router,
    },
    {
        path: '/mother',
        route: mother_route_1.Mother_router,
    },
    {
        path: '/gairdean',
        route: gairdean_route_1.Gairdean_router,
    },
    {
        path: '/teacher',
        route: teacher_route_1.teacher_router,
    },
    {
        path: '/stafe',
        route: stafe_route_1.stafe_router,
    },
    {
        path: '/fee',
        route: fee_route_1.Fee_router,
    },
    {
        path: '/post',
        route: post_route_1.post_router,
    },
    {
        path: '/result',
        route: result_route_1.result_router,
    },
    {
        path: '/feesStructure',
        route: FeesStructure_route_1.feesStructure_router,
    },
    {
        path: '/selary',
        route: selary_route_1.selary_router,
    },
    {
        path: '/notifection',
        route: notifection_route_1.notifection_router,
    },
    {
        path: '/about',
        route: about_route_1.about_router,
    },
    {
        path: '/consult',
        route: consulting_route_1.consult_router,
    },
    {
        path: '/gain',
        route: gain_router_1.gain_router,
    },
    {
        path: '/image',
        route: image_route_1.image_router,
    },
    {
        path: '/release',
        route: release_route_1.release_route,
    },
    {
        path: '/user',
        route: user_router_1.user_router,
    },
    {
        path: '/class',
        route: class_router_1.class_rouote,
    },
    {
        path: '/subject',
        route: subject_router_1.subject_router,
    },
];
moduleRoute.forEach((route) => router.use(route.path, route.route));
exports.v1Route = router;
