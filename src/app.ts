import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { v1Route } from './router/v1';
import { v2Route } from './router/v2';

const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

//applycation v1 routes
app.use('/api/v1', v1Route);
app.use('/api/v2', v2Route);

app.get('/', (req: Request, res: Response) => {
  res.send('Tamirul Ummah Maderasah Server');
});

export default app;
