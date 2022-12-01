import { Request, Response} from 'express';
import ApiResponseHandler from '../apiResponseHandler';
import UserService from '../../../services/userService';
import { validationResult } from 'express-validator';


export default class AuthController {
    static async create(req: Request<{}, { login: string, email: string, password: string }>, res: Response) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                res.status(400).json(errors);
            }

            const {login, email, password} = req.body;
            const message = await UserService.create(login, email, password);

            await ApiResponseHandler.success(req, res, message);
        } catch (error) {
            await ApiResponseHandler.error(req, res, error);
        }
    }

    static async login(req: Request<{}, { login: string, password: string }>, res: Response) {
        try {
            const { login, password } = req.body;
            const message = await UserService.login(login, password);
    
            await ApiResponseHandler.success(req, res, message);
        } catch (error) {
            await ApiResponseHandler.error(req, res, error);
        }
    }

    static async getUsers(req: Request, res: Response) {
        try {
            const users = await UserService.getUsers();

            await ApiResponseHandler.success(req, res, users);
        } catch (error) {
            await ApiResponseHandler.error(req, res, error);
        }
    }

    static async getMe(req: Request, res: Response) {
        try {
            const user = {
                user: req.params.user,
                date: new Date().toISOString()
            }
            
            await ApiResponseHandler.success(req, res, user);
        } catch (error) {
            await ApiResponseHandler.error(req, res, error);
        }
    }

    static async getById() {
        
    }

    static async changePass() {

    }

    static async deleteUser() {

    }

}