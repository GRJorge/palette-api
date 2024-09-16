import { Request, Response } from 'express';
import UserService from '../services/user.service';
import user from '../interfaces/user.interface';
import errorService from '../services/error.service';

class UserController {
    async createUser(req: Request, res: Response) {
        const { username, password } = req.body;
        const newUserData: user = { username, password };

        try {
            const newUserResult = await UserService.createUser(newUserData);

            res.status(201).json(newUserResult);
        } catch (error: any) {
            errorService.validationError(error, res);
        }
    }
    async editUser(req: Request, res: Response) {
        const { id, username, password, newPassword } = req.body;

        if (password && newPassword) {
            if (!(await UserService.comparePassword(id, password))) {
                return res.status(400).json({ msg: 'Incorrect password' });
            }
        }

        try {
            const editedUserResult = await UserService.editUser(id, username, newPassword);

            res.send(editedUserResult);
        } catch (error: any) {
            if (error.name === 'CastError' && error.kind === 'ObjectId') {
                res.status(400).json({ msg: 'User not founded', error });
            } else {
                res.status(500).json(error);
            }
        }
    }
}

export default new UserController();
