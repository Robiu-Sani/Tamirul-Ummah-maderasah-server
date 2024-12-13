import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { notice_router } from './module/notices/notice.route';
const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

//applycation routes
app.use('/api/v1/notice', notice_router);

app.get('/', (req: Request, res: Response) => {
  res.send('Tamirul Ummah Maderasah Server');
});

export default app;
