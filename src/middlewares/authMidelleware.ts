import { Request, Response, NextFunction } from 'express';
import { Token } from '../api/http/users/jwtToken';
import { HttpError } from '../utils/httpError';
import ApiResponseHandler from '../api/http/apiResponseHandler';

export async function authMidlleware(req: Request, res: Response, next: NextFunction) {
    try {
        if ( !req.headers.authorization && !req.headers.authorization?.startsWith('Bearer ')) {
            throw new HttpError(401, 'Auth Error')
        }

        const user = Token.decoded(req.headers.authorization.split(' ')[1])
        req.params.user = user;

        return next();
    } catch (error) {
        await ApiResponseHandler.error(req, res, error);
    }
}