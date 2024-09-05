import mongoose from 'mongoose';

export default async function connect() {
    try {
        await mongoose.connect((process.env.DB_URL || process.env.DB_DEV_URL)! + process.env.DB_NAME);
        console.log('Connected to DB');
    } catch (error) {
        console.error(`DB Error:\n${error}`);
    }
}
