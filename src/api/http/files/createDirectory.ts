import ApiResponseHandler from '../apiResponseHandler';
import { Request, Response, NextFunction } from 'express';
import { FileCreateMessage } from '../../../ts/types';
import { fileModel } from '../../../models/fileModel';
import FileProvider from '../../../providers/fileProvider';

export default async (req: Request<{id: string}, {}, { name: string, type: string, parentDirectory: string }>, res: Response<FileCreateMessage>, next: NextFunction) => {
    try {

        const {name, type, parentDirectory} = req.body
        const file = await FileProvider.createFile(new fileModel({name, type, parentDirectory, user: req.params.id}))
        const message: FileCreateMessage = {
            file : file,
            date : new Date().toISOString()
        } 

       
        await ApiResponseHandler.success(req, res, message);
        
    } catch (error) {
        await ApiResponseHandler.error(req, res, error);
    }
};