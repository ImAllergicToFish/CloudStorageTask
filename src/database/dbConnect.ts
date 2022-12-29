import { getConfig } from "../config";
import mongoose from 'mongoose';

const dbConnet = getConfig().TEST_DATABASE_CONNECTION || "mongodb://127.0.0.1:27023/admin?replicaSet=dbrs&directConnection=true";

const connectDb = async () => {
    try {
        await mongoose.connect(dbConnet)
            .then(() => {
                console.log('DB connect')
            })
    } catch (error) {
        console.log(error)
    }
}

export default connectDb;