import { Request, Response, NextFunction } from 'express';
import FileService from '../../../services/fileService';
import ApiResponseHandler from '../apiResponseHandler';

export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        const files = await FileService.getFiles();
        await ApiResponseHandler.success(req, res, files);
    } catch (error) {
        await ApiResponseHandler.error(req, res, next);
    }
}