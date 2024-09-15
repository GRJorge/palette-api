import express, { json, urlencoded } from 'express';
import cors from 'cors';
import 'dotenv/config';

import userRouter from './routes/user.routes';
import tagRouter from './routes/tag.routes';

const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));

app.use('/user', userRouter);
app.use('/tag', tagRouter);

export default app;
