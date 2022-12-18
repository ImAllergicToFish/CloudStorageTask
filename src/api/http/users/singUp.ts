import { Request, Response, NextFunction } from 'express';
import { SignUpMessage } from '../../../ts/types';
import ApiResponseHandler from '../apiResponseHandler';
import UserService from '../../../services/userService';

export default async (req: Request<{}, { login: string, email: string, password: string }>, res: Response<SignUpMessage>, next: NextFunction) => {
    try {

        const {login, email, password} = req.body;
        const message = await UserService.create(login, email, password);

        await ApiResponseHandler.success(req, res, message);
    } catch (error) {
        await ApiResponseHandler.error(req, res, error);
    }
};