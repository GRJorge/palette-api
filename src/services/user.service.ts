import bcrypt from 'bcrypt';
import userModel from '../models/user.model';
import user from '../interfaces/user.interface';

class UserService {
    async createUser(user: user) {
        user.password = await this.hashPassword(user.password);

        return new userModel(user).save();
    }
    async editUser(id: string, username?: string, password?: string) {
        interface EditedData {
            username?: string;
            password?: string;
        }

        let editedData: EditedData = {};

        if (username) {
            editedData.username = username;
        }
        if (password) {
            editedData.password = await this.hashPassword(password);
        }

        return userModel.findByIdAndUpdate(id, editedData);
    }
    hashPassword(password: string): Promise<string> {
        return bcrypt.hash(password, 10);
    }
    async comparePassword(id: string, password: string): Promise<boolean> {
        const query = await userModel.findById(id).select('password');

        if (query) {
            return bcrypt.compare(password, query.password);
        } else {
            return false;
        }
    }
}

export default new UserService();
