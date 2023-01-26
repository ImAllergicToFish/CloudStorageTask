//------------------------------------------------------------|
//                  Example Message Types                     |
//------------------------------------------------------------/

import { FileInterface, IUser } from "./interfaces";

export type ExampleMessage = {
    message: string,
    date: string
}

export type EchoMessage = {
    isEcho: boolean
} & ExampleMessage;

export type SignUpMessage= {
    isSignUp: boolean,
    message: string,
    date: string
}
export type SignInMessage = {
    user: Omit<IUser, 'password' >,
    isSignIn: boolean,
    message: string,
    JWT: string,
    date: string
}
export type AuthMeMessage = {
    user: Omit<IUser, 'password' > | {},
    JWT: string | null,
    date: string
}
export type FileCreateMessage = {
    file: FileInterface,
    date: string
}
export type FetchFilesMessage = {
    files: FileInterface[] | null,
    date: string
}