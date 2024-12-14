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
const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

//applycation routes
app.use('/api/v1/notice', notice_router);
app.use('/api/v1/institution', institution_router);
app.use('/api/v1/slide', slide_router);
app.use('/api/v1/student', student_router);

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
