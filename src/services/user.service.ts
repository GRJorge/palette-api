import userModel from '../models/user.model';
import user from '../interfaces/user.interface';

class UserService {
    public createUser(user: user) {
        return new userModel(user).save();
    }
}

export default new UserService;
