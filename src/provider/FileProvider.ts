import File from "../database/schemas/File";
import { FileInterface } from "../ts/interfaces";

export class FileProvider {
    static create = async (fileData: FileInterface) => {
       const file = await File.create(fileData);
       return file;
    }

    static download = () => {

    }

    static getById = async (name : string) => {
        const file = await File.findOne({ name }); 
        return file;
    }

    static getFiles = async () => {
        const files = await File.find();
        return files;
    }
}