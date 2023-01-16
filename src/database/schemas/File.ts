import { Schema, model } from "mongoose";
import { Fileinterface } from "../../ts/interfaces";

const File = new Schema<Fileinterface>({
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