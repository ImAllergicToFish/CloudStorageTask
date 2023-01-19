import { Request, Response, NextFunction } from 'express';
import ApiResponseHandler from '../apiResponseHandler';
import FileService from '../../../services/fileService';

export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params['id'];
        const file = await FileService.getFileByName(id);
        await ApiResponseHandler.success(req, res, file);
    } catch (error) {
        await ApiResponseHandler.error(req, res, error);
    }
}