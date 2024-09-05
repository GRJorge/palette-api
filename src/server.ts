import app from './app';
import connect from './config/db';

app.listen(process.env.PORT, () => {
    console.log(`Listen on port: ${process.env.PORT}`);
    connect();
});
