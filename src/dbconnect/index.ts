
require('dotenv').config();
const mongoose = require('mongoose');


export default async function dbConnect (): Promise<void>{
    await mongoose.connect(process.env.DATABASE_CONNECTION)
    .then(()=>{
    console.log('Successfully connected to database');
    
})
}