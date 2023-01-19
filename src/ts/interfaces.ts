import { Types } from "mongoose";

export interface RoleInterface {
    role: string;
}

export interface FileInterface {
    name: string;
    type: string;
    path: string;
    accessLink?: string;
    createBy?: string;
    updateBy?: string
    createDate: string;
    size: number;
    downloadCount?: number;
    viewsCount?: number;
}

export interface UserInterface {
    login: string;
    email: string;
    password: string;
    number: number;
    role: Types.DocumentArray<RoleInterface>;
    files: Types.DocumentArray<FileInterface>;
}