import { Request, Response, NextFunction } from 'express';
import ApiResponseHandler from '../apiResponseHandler';

export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = {
            user: req.params.user,
            date: new Date().toISOString()
        }
        
        await ApiResponseHandler.success(req, res, user);
    } catch (error) {
        await ApiResponseHandler.error(req, res, error);
    }
};