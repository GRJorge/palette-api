import { Schema, model, Types } from 'mongoose';
import palette from '../interfaces/palette.interface';

const schema = new Schema<palette>(
    {
        user: { type: Schema.Types.ObjectId, ref: 'User' },
        dark: { type: String, required: true },
        light: { type: String, required: true },
        primary: { type: String, required: true },
        secondary: { type: String, required: true },
        alert: { type: String, required: true },
        warning: { type: String, required: true },
        success: { type: String, required: true },
        names: { type: [String], required: true },
        tags: [{ type: Types.ObjectId, ref: 'Tag' }],
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default model<palette>('Palette', schema);
