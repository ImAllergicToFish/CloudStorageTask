import { Schema, model } from "mongoose";
import { FileInterface } from "../../ts/interfaces";

const File = new Schema<FileInterface>({
    name: {
        type: String,
        unique: true,
        require: true
    },
    createBy: {
        type: String,
        require: true
    },
    updateBy: {
        type: String,
        require: true
    },
    createDate: {
        type: Date,
        require: true
    },
    size: {
        type: Number,
        require: true
    },
    downloadCount: {
        type: Number,
        require: true
    },
    viewsCount: {
        type: Number,
        require: true
    }
})

export default model('File', File);