import { Schema, model } from "mongoose";
import { FileInterface } from "../../ts/interfaces";

const File = new Schema<FileInterface>({
    name: {
        type: String,
        unique: true,
        require: true
    },
    type: {
        type: String,
        require: true
    },
    path: {
        type: String,
        require: true,
        default: ''
    },
    accessLink: {
        type: String
    },
    createBy: {
        type: String,
        //require: true,
    },
    updateBy: {
        type: String
    },
    createDate: {
        type: String,
        require: true
    },
    size: {
        type: Number,
        require: true,
        default: 0
    },
    downloadCount: {
        type: Number,
        //require: true,
        default: 0
    },
    viewsCount: {
        type: Number,
        //require: true,
        default: 0
    }
})

export default model('File', File);