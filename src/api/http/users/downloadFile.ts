import { Request, Response, NextFunction } from 'express';
import FileService from '../../../services/fileService';
import ApiResponseHandler from '../apiResponseHandler';

export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        
    } catch (error) {
        await ApiResponseHandler.error(req, res, error);
    }
}