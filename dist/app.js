"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const notice_route_1 = require("./module/notices/notice.route");
const contact_route_1 = require("./module/contact-info/contact.route");
const carousel_route_1 = require("./module/carousel/carousel.route");
const student_route_1 = require("./module/student/student.route");
const father_router_1 = require("./module/student/father/father.router");
const mother_route_1 = require("./module/student/mother/mother.route");
const gairdean_route_1 = require("./module/student/gairdean/gairdean.route");
const teacher_route_1 = require("./module/teacher/teacher.route");
const stafe_route_1 = require("./module/stafe/stafe.route");
const fee_route_1 = require("./module/student/education-fee/fee.route");
const post_route_1 = require("./module/post/post.route");
const _1stutiral_route_1 = require("./module/student/result/1stutiral/1stutiral.route");
const _2ndtutiral_route_1 = require("./module/student/result/2stutiral/2ndtutiral.route");
const _1stsamester_route_1 = require("./module/student/result/1stsamester/1stsamester.route");
const _2ndsamester_route_1 = require("./module/student/result/2ndsamester/2ndsamester.route");
const app = (0, express_1.default)();
//parser
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//applycation routes
app.use('/api/v1/notice', notice_route_1.notice_router);
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
app.use('/api/v1/first-tutiral', _1stutiral_route_1.firstTutiral_router);
app.use('/api/v1/secend-tutiral', _2ndtutiral_route_1.secendTutiral_router);
app.use('/api/v1/first-samister', _1stsamester_route_1.firstSamister_router);
app.use('/api/v1/secend-samister', _2ndsamester_route_1.secendSamister_router);
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
