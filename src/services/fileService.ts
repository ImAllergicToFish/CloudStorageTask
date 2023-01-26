import { UploadedFile } from 'express-fileupload';
import fs from 'fs'
import FileProvider from '../providers/fileProvider';
import UserProvider from '../providers/userProvider';
import { FileInterface } from '../ts/interfaces';
require('dotenv').config();
import { FileCreateMessage } from '../ts/types';
import { HttpError } from '../utils/httpError';



export default class FileService {

    static  createDirectory(file: FileInterface) : void{

            const filePath =`${process.env.FILE_PATH}//${file.user}//${file.path}`
            if(fs.existsSync(filePath)) throw new HttpError(400, 'File already exist')
            fs.mkdirSync(filePath)

    }
    static async uploadFiles(files: UploadedFile , parentDirecory: string, userId: string) : Promise<FileCreateMessage | void>{

            const parent = await FileProvider.FindFileById(userId, parentDirecory)
            const user = await UserProvider.findUserByProperty('_id', userId)
            if(user){
                if( user?.usedSpace + files.size > user.diskSpace) throw new HttpError(400, 'There is no space on the disk')
                user.usedSpace += files.size
                let path: string;
                
                if(parent){
                    path = `${process.env.FILE_PATH}//${user.id}//${parent.path}//${files.name}`
                } else{
                    path = `${process.env.FILE_PATH}//${user.id}//${files.name}`
                }
                if(fs.existsSync(path)) throw new HttpError(400, 'File already exist')
                files.mv(path)
                const fileType = files.name.split('.').pop()
                const File : FileInterface = {
                    name: files.name,
                    type : fileType ? fileType : 'dir',
                    size: files.size,
                    path: parent?.path,
                    parentDirectory: parent?._id,
                    user: userId
                }
                const dbFile = await FileProvider.SaveFile(File)
                await UserProvider.SaveUser(user)
                return { 
                    file: dbFile,
                    date: new Date().toISOString()
                }
            }



    }





}