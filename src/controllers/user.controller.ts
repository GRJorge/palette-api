import { Request, Response } from 'express';
import UserService from '../services/user.service';
import user from '../interfaces/user.interface';

class UserController {
    async createUser(req: Request, res: Response) {
        const { username, password } = req.body;
        const newUserData: user = { username, password };

        try {
            const newUserResult = await UserService.createUser(newUserData);

            res.status(201).json(newUserResult);
        } catch (error: any) {
            let status = 500;

            if (error.code === 11000 || error.name === 'ValidationError') {
                status = 400;
            }

            res.status(status).json(error);
        }
    }
}

export default new UserController();
