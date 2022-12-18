import { Schema, model}  from 'mongoose';

const Role = new Schema({
    role: {type: String, unique: true, require: true, default: 'user'}
})

export default model('Role', Role);