import app from './app';

app.listen(process.env.PORT, () => {
    console.log(`Listen on port: ${process.env.PORT}`);
});
