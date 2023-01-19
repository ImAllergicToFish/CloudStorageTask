import File from "../database/schemas/File";
import { FileInterface } from "../ts/interfaces";

export class FileProvider {
    static create = async (fileData: FileInterface) => {
       const file = await File.create(fileData);
       return file;
    }

    static download = () => {

    }
}