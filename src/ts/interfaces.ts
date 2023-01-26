import { Request } from 'express'
import {Types} from 'mongoose'

//------------------------------------------------------------|
//                     Some Interfaces                        |
//------------------------------------------------------------/

export interface IUser{
        id: string,
        email: string,
        username: string,
        password: string,
        diskSpace: number,
        usedSpace: number,
        files: Types.ObjectId 
    
}

export interface IJWTData {
        
}

export interface FileInterface {
        _id?: Types.ObjectId 
        name: String
        type: String
        size: Number
        date?: String
        accessLink?: String
        path: String | undefined
        user: string | undefined
        parentDirectory:Types.ObjectId | undefined
        childs?: Types.ObjectId[]
}

// export interface RequestWithId extends Request {
//        id: string
// } 