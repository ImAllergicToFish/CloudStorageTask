
import { fileModel } from "../models/fileModel";
import { userModel } from "../models/userModel";
import FileService from "../services/fileService";
import { IUser } from "../ts/interfaces";
import { hashString } from "../utils/hashString";

export default class UserProvider {

     static async createUser(_email:string, _username: string, _password: string): Promise<void> {
        try {
           
            const hashPassword = await hashString(_password)
            const user = new userModel({email: _email, username: _username, password: hashPassword})
            await user.save()
            FileService.createDirectory(new fileModel({user: user.id, name: ''}))
        } catch (error) {
             console.error(error)
             throw error
        }
        

    }
    static async findUserByProperty(propertyName: string, value: string): Promise<IUser | null>{ 
       try { 
        const user = await userModel.findOne({[propertyName] : value})
        if(user) { return user }
        return null
       } catch (error) {
            console.error(error);
            throw error
       }
    }
    static async SaveUser(User: IUser): Promise<void>{ 
     try { 
      const user = await userModel.findOne({_id: User.id})
      user?.save()

     } catch (error) {
          console.error(error);
          throw error
     }
  }
}   