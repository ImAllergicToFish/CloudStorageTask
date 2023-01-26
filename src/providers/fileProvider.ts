import { fileModel } from "../models/fileModel"
import FileService from "../services/fileService"
import { FileInterface } from "../ts/interfaces"
import { HttpError } from "../utils/httpError"



export default class FileProvider{
    
    static async createFile (file: FileInterface) : Promise<FileInterface> {
        try {
            const savingFile = new fileModel(file)
            const parentFile = await fileModel.findOne({_id: savingFile.parentDirectory})
            if(!parentFile) {
                savingFile.path = savingFile.name
            }
            else{
                savingFile.path = `${parentFile.path}//${savingFile.name}`
                parentFile.childs ? parentFile.childs.push(savingFile._id) : null
                
                await parentFile.save()
            }
            await savingFile.save()
            FileService.createDirectory(savingFile)
            return savingFile
        } catch (error) {
            console.error(error)
            throw new HttpError(500, 'Server Error')
        }
    }
    static async FindFilesByProperty (user: string, parentDirectory: string) : Promise<FileInterface[] | null>{
        try { 
            const files = await fileModel.find({user, parentDirectory })
            if(files) { return files }
            return null
           } catch (error) {
                console.error(error);
                throw new HttpError(500, 'Server Error')
           }
        }
    
        static async FindFileById (user: string, _id: string) : Promise<FileInterface | null>{
            try { 
                const files = await fileModel.findOne({ _id, user})
                if(files) { return files }
                return null
               } catch (error) {
                    console.error(error);
                    throw new HttpError(500, 'Server Error')
               }
            }
        static async SaveFile(file: FileInterface): Promise<FileInterface>{
            try { 
                const dbFile = new fileModel(file)
                await dbFile.save()
                return dbFile
               } catch (error) {
                    console.error(error);
                    throw new HttpError(500, 'Server Error')
               }
            }
        }
    
    
