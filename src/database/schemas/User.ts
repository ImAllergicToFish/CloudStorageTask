import { Schema, model, ObjectId}  from 'mongoose';
import { UserInterface } from '../../ts/interfaces';

const User = new Schema<UserInterface>({
    login: {
        type: String, 
        unique: true, 
        require: true
    },
    email: {
        type: String, 
        unique: true, 
        require: true
    },
    password: {
        type: String, 
        require: true
    },
    number: {
        type: Number
    },
    role: [{type: String, ref: 'Role'}],
    files: [{type: Object, ref: 'File'}]
})

export default model('User', User);