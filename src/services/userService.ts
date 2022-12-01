import User from "../api/http/users/schemas/User";
import bcrypt from 'bcryptjs';
import { Token } from "../api/http/users/jwtToken";
import { getConfig } from "../config";
import { HttpError } from "../utils/httpError";
import { SignInMessage, SignUpMessage } from "../ts/types";

export default class UserService {
    static async create(login: string, email: string, password: string): Promise<SignUpMessage> {
        const candidate = await User.findOne({ login });
        if (candidate) {
            throw new HttpError(400, 'Пользователь с таким логином уже существует');
        }
        const hashPassword = bcrypt.hashSync(password, 8);
        const user = new User({login, email, password: hashPassword});
        await user.save();
        return {
            message: `create user: ${login}`,
            date: new Date().toISOString()
        }
    }

    static async login(login: string, password: string): Promise<SignInMessage> {
        const candidate = await User.findOne({ login });
        if (!candidate) {
            throw new HttpError(400, 'Пользователь с таким логином не найден');
        } 

        const validPass = bcrypt.compareSync(password, String(candidate.password));
        if (!validPass) {
            throw new HttpError(400, 'Неверный пароль');
        }

        const jwtToken = Token.create(candidate._id);
        return {
            message: `${candidate.login} is Authorization`,
            jwt: jwtToken,
            date: new Date().toISOString()
        }
    }   

    static async getUsers() {
        const users = await User.find();
        return users;
    }


    static async getById(id: Object) {
        
    }
 
    static async changePass() {

    }

    static async deleteUser() {

    }
}