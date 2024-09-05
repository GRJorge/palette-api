import express, { json, urlencoded } from 'express';
import cors from 'cors';
import 'dotenv/config';

import userRouter from './routes/user.routes';

const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));

app.use('/user', userRouter);

export default app;
