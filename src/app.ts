import express, {
  Application,
  // NextFunction,
  Request,
  // response,
  Response,
} from 'express';
import cors from 'cors';
import { notice_router } from './module/notices/notice.route';
import { institution_router } from './module/contact-info/contact.route';
import { student_router } from './module/student/student.route';
import { slide_router } from './module/carousel/carousel.route';
import { father_router } from './module/student/father/father.router';
import { Mother_router } from './module/student/mother/mother.route';
import { Gairdean_router } from './module/student/gairdean/gairdean.route';
import { teacher_router } from './module/teacher/teacher.route';
import { stafe_router } from './module/stafe/stafe.route';
import { Fee_router } from './module/student/education-fee/fee.route';
import { post_router } from './module/post/post.route';
import { feesStructure_router } from './module/FeesStructure/FeesStructure.route';
import { selary_router } from './module/selary/selary.route';
import { notifection_router } from './module/notifection/notifection.route';
import { about_router } from './module/about-institute/about.route';
import { result_router } from './module/student/result/result.route';
import { consult_router } from './module/consulting/consulting.route';
import { auth_route } from './module/auth/auth.route';
import { gain_router } from './module/gain/gain.router';

const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

//applycation v1 routes
app.use('/api/v1/notice', notice_router);
app.use('/api/v1/auth', auth_route);
app.use('/api/v1/institution', institution_router);
app.use('/api/v1/slide', slide_router);
app.use('/api/v1/student', student_router);
app.use('/api/v1/father', father_router);
app.use('/api/v1/mother', Mother_router);
app.use('/api/v1/gairdean', Gairdean_router);
app.use('/api/v1/teacher', teacher_router);
app.use('/api/v1/stafe', stafe_router);
app.use('/api/v1/fee', Fee_router);
app.use('/api/v1/post', post_router);
app.use('/api/v1/result', result_router);
app.use('/api/v1/feesStructure', feesStructure_router);
app.use('/api/v1/selary', selary_router);
app.use('/api/v1/notifection', notifection_router);
app.use('/api/v1/about', about_router);
app.use('/api/v1/consult', consult_router);
app.use('/api/v1/gain', gain_router);

app.get('/', (req: Request, res: Response) => {
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

export default app;
