import { Types } from 'mongoose';

export default interface palette {
    user: Types.ObjectId;
    dark: color;
    light: color;
    primary: color;
    secondary: color;
    alert: color;
    warning: color;
    success: color;
    names: [string];
    tags: [Types.ObjectId];
}

export interface colors {
    dark: string;
    light: string;
    primary: string;
    secondary: string;
    alert: string;
    warning: string;
    success: string;
    names: [string];
}

export interface color {
    hex: string;
    rgb: {
        r: number;
        g: number;
        b: number;
    };
    hsl: {
        h: number;
        s: number;
        l: number;
    };
}
