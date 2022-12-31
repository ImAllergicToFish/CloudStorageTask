import { Model, Query, Schema } from "mongoose";
import User from "../database/schemas/User";

type FindType = {
    login: string,
}

type CreateType = {
    login: string,
    email: string,
    password: string
}

export class UserProvider {
    static findOne = async ({login}: FindType) => {
        const candidate = await User.findOne({login})
        return candidate;
    }

    static create = async({ login, email, password }: CreateType) => {
        const user = await User.create({login, email, password});
        return user;
    }
}