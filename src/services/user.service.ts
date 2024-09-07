import userModel from '../models/user.model';
import user from '../interfaces/user.interface';

class UserService {
    createUser(user: user) {
        return new userModel(user).save();
    }
    editUser(id: string, username?: string, password?: string) {
        interface EditedData {
            username?: string;
            password?: string;
        }

        let editedData: EditedData = {};

        if (username) {
            editedData.username = username;
        }
        if (password) {
            editedData.password = password;
        }

        return userModel.findByIdAndUpdate(id, editedData);
    }
}

export default new UserService();
