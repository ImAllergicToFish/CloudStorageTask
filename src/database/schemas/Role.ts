import { Schema, model}  from 'mongoose';
import { RoleInterface } from '../../ts/interfaces';

const Role = new Schema<RoleInterface>({
    role: {
        type: String, 
        unique: true, 
        require: true, 
        default: 'user'
    }
})

export default model('Role', Role);