import { Types } from 'mongoose';

export default interface palette {
    user: Types.ObjectId;
    dark: string;
    light: string;
    primary: string;
    secondary: string;
    alert: string;
    warning: string;
    success: string;
    names: [string];
    tags: [Types.ObjectId];
}
