require('dotenv').config();
import connectDb from './database/dbConnect';
import api from './api';
import { getConfig } from './config';

const PORT = getConfig().PORT || 8080;

//FIXED добавить обработку ошибки, если TEST_DATABASE_CONNECTION undefined и вынести все в файл database
const start = async () => {
    try {
        await connectDb();
        api.listen(PORT, () => {
            console.log(`Listening on port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();
