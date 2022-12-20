import { Model, Query, Schema } from "mongoose";
import User from "../database/schemas/User";

type FindType = {
    login: string,
}

export class UserProvider {
    static findOne = async ({login}: FindType) => {
        const candidate = await User.findOne({login})
        return candidate;
    }
}