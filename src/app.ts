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
import { slide_router } from './module/carousel/carousel.route';
import { student_router } from './module/student/student.route';
import { father_router } from './module/student/father/father.router';
import { Mother_router } from './module/student/mother/mother.route';
import { Gairdean_router } from './module/student/gairdean/gairdean.route';
import { teacher_router } from './module/teacher/teacher.route';
import { stafe_router } from './module/stafe/stafe.route';
import { Fee_router } from './module/student/education-fee/fee.route';
import { post_router } from './module/post/post.route';
import { firstTutiral_router } from './module/student/result/1stutiral/1stutiral.route';
import { secendTutiral_router } from './module/student/result/2stutiral/2ndtutiral.route';
import { firstSamister_router } from './module/student/result/1stsamester/1stsamester.route';
import { secendSamister_router } from './module/student/result/2ndsamester/2ndsamester.route';
import { feesStructure_router } from './module/FeesStructure/FeesStructure.route';
import { selary_router } from './module/selary/selary.route';
import { notifection_router } from './module/notifection/notifection.route';

const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

//applycation routes
app.use('/api/v1/notice', notice_router);
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
app.use('/api/v1/first-tutiral', firstTutiral_router);
app.use('/api/v1/secend-tutiral', secendTutiral_router);
app.use('/api/v1/first-samister', firstSamister_router);
app.use('/api/v1/secend-samister', secendSamister_router);
app.use('/api/v1/feesStructure', feesStructure_router);
app.use('/api/v1/selary', selary_router);
app.use('/api/v1/notifection', notifection_router);

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
