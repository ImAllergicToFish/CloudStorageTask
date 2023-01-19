import { FileProvider } from "../provider/FileProvider";
import { UploadFileMessage } from "../ts/types";

export default class FileService {
    static async upload(name: string, mimetype: string, path: string, size: number): Promise<UploadFileMessage> {
        const type = mimetype.split('/')[1];
        const createDate = new Date().toISOString();
        await FileProvider.create({name, type, path, createDate, size});
        return {
            message: 'File uploaded',
            date: new Date().toISOString()
        }
    }

    static async download() {
        
    }

    static async getFileById() {

    }

    static async getFiles() {
        
    }
}