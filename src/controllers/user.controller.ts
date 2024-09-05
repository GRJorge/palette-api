import { Request, Response } from 'express';
import UserService from '../services/user.service';
import user from '../interfaces/user.interface';

class UserController {
    async createUser(req: Request, res: Response) {
        const { username, password } = req.body;

        const newUserData: user = { username, password };

        try {
            const newUserResult = await UserService.createUser(newUserData);

            res.send(newUserResult);
        } catch (error) {
            console.error(error);
        }
    }
}

export default new UserController();
