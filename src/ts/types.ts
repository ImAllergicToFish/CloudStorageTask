//------------------------------------------------------------|
//                  Example Message Types                     |
//------------------------------------------------------------/

export type ExampleMessage = {
    message: string,
    date: string
}

export type EchoMessage = {
    isEcho: boolean
} & ExampleMessage;

export type SignInMessage = {
    message: string,
    jwt: string,
    date: string
}

export type SignUpMessage = {
    message: string,
    date: string
}