import { Request, Response, NextFunction } from 'express';
import ApiResponseHandler from '../apiResponseHandler';
import FileService from '../../../services/fileService';

export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        const filedata = req.file;
        if (!filedata) {
            res.send('Error: upload error');
        } else {
            const { originalname, mimetype, path, size } = filedata;
            const UploadFileMessage = await FileService.upload(originalname, mimetype, path, size );
            await ApiResponseHandler.success(req, res, UploadFileMessage);
        }
    } catch (error) {
        console.log(error);
        await ApiResponseHandler.error(req, res, error);
    }
}