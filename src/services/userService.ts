import User from "../database/schemas/User";
import bcrypt from 'bcryptjs';
import { Token } from "../api/http/users/jwtToken";
import { HttpError } from "../utils/httpError";
import { SignInMessage, SignUpMessage } from "../ts/types";
import { UserProvider } from "../provider/UserProvider";

export default class UserService {
    static async create(login: string, email: string, password: string): Promise<SignUpMessage> {
        const candidate = await UserProvider.findOne({ login });
        if (candidate) {
            throw new HttpError(400, 'Пользователь с таким логином уже существует');
        }
        const hashPassword = bcrypt.hashSync(password, 8);
        await User.create({login, email, password: hashPassword});
        return {
            message: `create user: ${login}`,
            date: new Date().toISOString()
        }
    }

    // FIXME добавить провайдер
    static async login(login: string, password: string): Promise<SignInMessage> {
        const candidate = await UserProvider.findOne({ login });
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

    static async getById(id: Object) {
        
    }
 
    static async changePass() {

    }

    static async deleteUser() {

    }
}