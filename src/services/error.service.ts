import { Response } from 'express';

class ErrorService {
    validationError(error: any, res: Response) {
        let status = 500;

        if (error.code === 11000 || error.name === 'ValidationError') {
            status = 400;
        }

        res.status(status).json(error);
    }
}

export default new ErrorService();
