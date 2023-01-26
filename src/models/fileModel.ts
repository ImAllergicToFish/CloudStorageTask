import { Types, model, Schema } from "mongoose"
import { FileInterface } from "../ts/interfaces"


const FileSchema = new Schema({
    name: {type: String, required: true },
    type: {type: String, required: true},
    size: { type: Number, default: 0},
    accessLink: {type: String}, 
    date: {type: String, default: new Date().toLocaleString('ru').split(',')[0]},
    path: {type: String, default: ''}, 
    user: { type: Types.ObjectId, ref: 'User'},
    parentDirectory: {type: Types.ObjectId, ref: 'File'},
    childs: [{ type: Types.ObjectId, ref: 'File'}]
})
export const fileModel = model<FileInterface>('File', FileSchema)
