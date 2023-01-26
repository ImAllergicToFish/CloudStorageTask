import { Request, Response, NextFunction } from 'express';
import { decodeJWT } from '../utils/JWT';
import { HttpError } from '../utils/httpError';
import ApiResponseHandler from '../api/http/apiResponseHandler';
//import { RequestWithId } from '../ts/interfaces';

export async function authMiddleWare(req: Request, res: Response, next: NextFunction) {
    if(req.method === 'OPTIONS') return next()
    
    try {
       
        if(!req.headers.authorization) {throw new HttpError(401, 'Auth Error')}
        const decodedJWT = decodeJWT(req.headers.authorization.split(' ')[1])
        req.params.id = decodedJWT
        return next();
    } catch (error) {
        await ApiResponseHandler.error(req, res, error)
    }
}