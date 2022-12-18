import { Schema, model}  from 'mongoose';

const User = new Schema({
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
    role: [{type: String}]
})

export default model('User', User);