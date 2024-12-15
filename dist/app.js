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
