import { SignInMessage, SignUpMessage} from "../ts/types";
import { isPasswordValid } from "../utils/hashString";
import { HttpError } from "../utils/httpError";
import { generateJWT } from "../utils/JWT";
import userProvider from "../providers/userProvider";



export default class AuthService {

     static async signUp(_email:string, _username: string, _password: string) : Promise<SignUpMessage> {
        

            if(await userProvider.findUserByProperty('email', _email)){
                throw new HttpError( 400, 'User with this email already exists' )
            }
            if(await userProvider.findUserByProperty('username',_username)){
                throw new HttpError( 400, 'User with this username already exists' )
            }
            userProvider.createUser(_email, _username, _password)
            return {
                isSignUp: true,
                message: 'Registration complete!',
                date: new Date().toISOString()
            };

        
    }
    static async signIn(email:string, password: string) : Promise<SignInMessage> {
        
 
            const User = await userProvider.findUserByProperty('email', email)
            if(!User){
                throw new HttpError(400, 'User with this email not found')
            }
            if(!await isPasswordValid(password, User.password)){
                throw new HttpError(400, 'Incorrect password')
            }
            return {
                user: {
                    id: User.id,
                    username: User.username,
                    email: User.email,
                    diskSpace: User.diskSpace,
                    usedSpace: User.usedSpace,
                    files: User.files
                },
                isSignIn: true,
                message: 'Authorization complete!',
                JWT: generateJWT(User.id),
                date: new Date().toISOString()
            }
            

    }

    
}   