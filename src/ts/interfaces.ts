import { Types } from "mongoose";

export interface RoleInterface {
    role: string;
}

export interface FileInterface {
    name: string;
    createBy: string;
    updateBy: string
    createDate: Date;
    size: number;
    downloadCount: number;
    viewsCount: number;
}

export interface UserInterface {
    login: string;
    email: string;
    password: string;
    number: number;
    role: Types.DocumentArray<RoleInterface>;
    files: Types.DocumentArray<FileInterface>;
}