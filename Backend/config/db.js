import mongoose from 'mongoose'

import dotenv from  'dotenv' //to use the cred 
dotenv.config('../.env');//we send path in params as they aren't in the same lvl pahila 

//error = export default dbConnection = async() => {
const dbConnection = async() => {  //async = wait for function to complete before proceeding aka connection establish garda wait gara 
//we do try catch to handle error if any as .env file ma cred mistake huda error aaucha so

    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("MongoDB successfully connected");

    }catch(error){
        console.log(`MongoDB cannot be connected ${error.message}`);
        process.exit(1); //error aauda: server aadhera bascha so naadhkiyosh bhaera we do this 

    }

}

export default dbConnection;
//or export default async function dbConnection() { } -------> do this but with arrow function can't do export default 