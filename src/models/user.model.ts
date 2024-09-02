import { Schema, Types, model } from 'mongoose';
import user from '../interfaces/user.interface';

const schema = new Schema<user>(
    {
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        favoritePalettes: [{ type: Types.ObjectId, ref: 'Palette' }]
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default model<user>('User', schema);
