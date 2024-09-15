import { Schema, model } from 'mongoose';
import tag from '../interfaces/tag.interface';

const schema = new Schema<tag>(
    {
        type: { type: String, required: true },
        tag: { type: String, required: true, unique: true },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default model<tag>('Tag', schema);
