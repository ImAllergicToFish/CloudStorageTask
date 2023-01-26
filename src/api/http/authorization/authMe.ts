import ApiResponseHandler from '../apiResponseHandler';
import { Request, Response, NextFunction } from 'express';
import { AuthMeMessage } from '../../../ts/types';
import UserProvider from '../../../providers/userProvider';
import { generateJWT } from '../../../utils/JWT';
//import { RequestWithId } from '../../../ts/interfaces';


export default async (req: Request, res: Response<AuthMeMessage>, next: NextFunction) => {
    try {
        let message: AuthMeMessage
        const User = await UserProvider.findUserByProperty('_id', req.params.id)
        if(User){
            message = {
                user: {
                    id: User.id,
                    username: User.username,
                    email: User.email,
                    diskSpace: User.diskSpace,
                    usedSpace: User.usedSpace,
                    files: User.files
                },
                JWT: generateJWT(req.params.id),
                date: new Date().toISOString()
            }
        } 
        else{
            message = {
                user: {},
                JWT: null,
                date: new Date().toISOString()
            }
        }

       
        await ApiResponseHandler.success(req, res, message);
        
    } catch (error) {
        await ApiResponseHandler.error(req, res, error);
    }
};