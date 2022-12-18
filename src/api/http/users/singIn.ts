import { Request, Response, NextFunction } from 'express';
import { SignInMessage } from '../../../ts/types';
import ApiResponseHandler from '../apiResponseHandler';
import UserService from '../../../services/userService';

export default async (req: Request<{}, { login: string, email: string, password: string }>, res: Response<SignInMessage>, next: NextFunction) => {
    try {

        const {login, password} = req.body;
        const message = await UserService.login(login, password);

        await ApiResponseHandler.success(req, res, message);
    } catch (error) {
        await ApiResponseHandler.error(req, res, error);
    }
};