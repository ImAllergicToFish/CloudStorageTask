require('dotenv').config();
import mongoose from 'mongoose';

import api from './api';
import { getConfig } from './config';

const PORT = getConfig().PORT || 8080;
const dbConnet = getConfig().TEST_DATABASE_CONNECTION || "mongodb://127.0.0.1:27023/admin?replicaSet=dbrs&directConnection=true";

//FIXED добавить обработку ошибки, если TEST_DATABASE_CONNECTION undefined и вынести все в файл database
const start = async () => {
    try {
        await mongoose.connect(dbConnet)
            .then(() => {
                console.log('DB connect')
            })
        api.listen(PORT, () => {
            console.log(`Listening on port ${PORT}`);
        });
    } catch (error) {

    }
}

start();
