import { Schema, model, Types } from 'mongoose';
import palette, { color } from '../interfaces/palette.interface';

const colorSchema = new Schema<color>({
    hex: { type: String, required: true },
    rgb: {
        r: { type: Number, required: true },
        g: { type: Number, required: true },
        b: { type: Number, required: true },
    },
    hsl: {
        h: { type: Number, required: true },
        s: { type: Number, required: true },
        l: { type: Number, required: true },
    },
});

const schema = new Schema<palette>(
    {
        user: { type: Schema.Types.ObjectId, ref: 'User' },
        dark: { type: colorSchema, required: true },
        light: { type: colorSchema, required: true },
        primary: { type: colorSchema, required: true },
        secondary: { type: colorSchema, required: true },
        alert: { type: colorSchema, required: true },
        warning: { type: colorSchema, required: true },
        success: { type: colorSchema, required: true },
        names: { type: [String], required: true },
        tags: [{ type: Types.ObjectId, ref: 'Tag' }],
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default model<palette>('Palette', schema);
