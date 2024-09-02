import { Types } from 'mongoose';

export default interface user {
    username: string;
    password: string;
    favoritePalettes: [Types.ObjectId];
}
