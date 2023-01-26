
import ApiResponseHandler from '../apiResponseHandler';
import { Request, Response, NextFunction } from 'express';
import { FetchFilesMessage } from '../../../ts/types';
import FileProvider from '../../../providers/fileProvider';


export default async (req: Request<{id: string}, {}, {}, { parent: string}>, res: Response<FetchFilesMessage>, next: NextFunction) => {
    try {
        const message : FetchFilesMessage = {
            files: await FileProvider.FindFilesByProperty(req.params.id, req.query.parent),
            date: new Date().toISOString()
        }


       
        await ApiResponseHandler.success(req, res, message);
        
    } catch (error) {
        await ApiResponseHandler.error(req, res, error);
    }
};