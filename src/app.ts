import express from 'express';
import 'dotenv/config';

import userRouter from './routes/user.routes';

const app = express();

app.use('/user', userRouter);

export default app;
