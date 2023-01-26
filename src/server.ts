require('dotenv').config();
import dbConnect from './dbconnect';
import api from './api';
import { getConfig } from './config';

const PORT = getConfig().PORT || 8080;



async function Start() {
    try {
        await dbConnect()
        api.listen(PORT, () => {
            console.log(`Listening on port ${PORT}`);
        });
    } catch (e) {
        console.log(e);
        
    }
} 
Start()