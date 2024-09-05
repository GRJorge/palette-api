import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import userRouter from './routes/user.routes';

const app = express();

app.use(cors());

app.use('/user', userRouter);

export default app;
