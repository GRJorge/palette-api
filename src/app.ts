import express, { json, urlencoded } from 'express';
import cors from 'cors';
import 'dotenv/config';
import morgan from 'morgan';

import userRouter from './routes/user.routes';
import tagRouter from './routes/tag.routes';
import paletteRouter from './routes/palette.routes';

const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(morgan('dev'));

app.use('/user', userRouter);
app.use('/tag', tagRouter);
app.use('/palette', paletteRouter);

export default app;
