"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const notice_route_1 = require("./module/notices/notice.route");
const contact_route_1 = require("./module/contact-info/contact.route");
const student_route_1 = require("./module/student/student.route");
const carousel_route_1 = require("./module/carousel/carousel.route");
const father_router_1 = require("./module/student/father/father.router");
const mother_route_1 = require("./module/student/mother/mother.route");
const gairdean_route_1 = require("./module/student/gairdean/gairdean.route");
const teacher_route_1 = require("./module/teacher/teacher.route");
const stafe_route_1 = require("./module/stafe/stafe.route");
const fee_route_1 = require("./module/student/education-fee/fee.route");
const post_route_1 = require("./module/post/post.route");
const FeesStructure_route_1 = require("./module/FeesStructure/FeesStructure.route");
const selary_route_1 = require("./module/selary/selary.route");
const notifection_route_1 = require("./module/notifection/notifection.route");
const about_route_1 = require("./module/about-institute/about.route");
const result_route_1 = require("./module/student/result/result.route");
const consulting_route_1 = require("./module/consulting/consulting.route");
const auth_route_1 = require("./module/auth/auth.route");
const gain_router_1 = require("./module/gain/gain.router");
const image_route_1 = require("./module/image/image.route");
const release_route_1 = require("./module/student/result/release/release.route");
// import { user_router } from './module/user/user.router';
const app = (0, express_1.default)();
//parser
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//applycation v1 routes
app.use('/api/v1/notice', notice_route_1.notice_router);
app.use('/api/v1/auth', auth_route_1.auth_route);
app.use('/api/v1/institution', contact_route_1.institution_router);
app.use('/api/v1/slide', carousel_route_1.slide_router);
app.use('/api/v1/student', student_route_1.student_router);
app.use('/api/v1/father', father_router_1.father_router);
app.use('/api/v1/mother', mother_route_1.Mother_router);
app.use('/api/v1/gairdean', gairdean_route_1.Gairdean_router);
app.use('/api/v1/teacher', teacher_route_1.teacher_router);
app.use('/api/v1/stafe', stafe_route_1.stafe_router);
app.use('/api/v1/fee', fee_route_1.Fee_router);
app.use('/api/v1/post', post_route_1.post_router);
app.use('/api/v1/result', result_route_1.result_router);
app.use('/api/v1/feesStructure', FeesStructure_route_1.feesStructure_router);
app.use('/api/v1/selary', selary_route_1.selary_router);
app.use('/api/v1/notifection', notifection_route_1.notifection_router);
app.use('/api/v1/about', about_route_1.about_router);
app.use('/api/v1/consult', consulting_route_1.consult_router);
app.use('/api/v1/gain', gain_router_1.gain_router);
app.use('/api/v1/image', image_route_1.image_router);
app.use('/api/v1/release', release_route_1.release_route);
// app.use('/api/v1/user', user_router);
app.get('/', (req, res) => {
    res.send('Tamirul Ummah Maderasah Server');
});
// app.use((err: any, req: Request, res: Response, next: NextFunction) => {
//   res.status(500).json({
//     success: false,
//     message: err.message || "Internal Server Error",
//     error:  err,
//   });
//   next()
// });
exports.default = app;
