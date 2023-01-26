import ApiResponseHandler from '../apiResponseHandler';
import { Request, Response, NextFunction } from 'express';
import { FileCreateMessage } from '../../../ts/types';
import FileService from '../../../services/fileService';


export default async (req: Request<{id: string}, {}, {parentDirectory: string }>, res: Response<FileCreateMessage>, next: NextFunction) => {
    try {
        let files
        let message
        if(req.files) {files = req.files.file}
        if(!Array.isArray(files) && files) {message = await FileService.uploadFiles(files, req.body.parentDirectory, req.params.id)}
        
        await ApiResponseHandler.success(req, res, message);
        
    } catch (error) {
        await ApiResponseHandler.error(req, res, error);
    }
};