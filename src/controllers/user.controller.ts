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
    async editUser(req: Request, res: Response) {
        const { id, username, password, newPassword } = req.body;
        let next = true;

        if (password && newPassword) {
            console.log('Comprobar contraseña');
            next = false;
        }

        if (next) {
            try {
                const editedUserResult = await UserService.editUser(id, username, newPassword);

                res.send(editedUserResult);
            } catch (error: any) {
                console.log(error);
                if (error.name === 'CastError' && error.kind === 'ObjectId') {
                    res.status(400).json({ msg: 'User not founded', error });
                } else {
                    res.status(500).json(error);
                }
            }
        } else {
            res.status(400).json({ msg: 'Incorrect Password' });
        }
    }
}

export default new UserController();
