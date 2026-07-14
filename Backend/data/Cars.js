import mongoose from "mongoose";
import car from "../data/car.js" //Mongoose model which was exported
import dotenv from "dotenv";

//dotenv.config("../.env"); //since different location , not in same level, cha we need to send the path as well
dotenv.config({
  path: "../.env",
});

const CARS = [
    { model: "Toyota Corolla", type: "Sedan", rate: 50, available: true, image: "https://images.unsplash.com/photo-1559385988-439b04de16f8?w=600&q=80&auto=format&fit=crop" },
    { model: "Honda Civic", type: "Sedan", rate: 55, available: false, image: "https://images.unsplash.com/photo-1561823528-057f4774dd3e?w=600&q=80&auto=format&fit=crop" },
    { model: "Hyundai Creta", type: "SUV", rate: 70, available: true, image: "https://images.unsplash.com/photo-1559038465-e0ca2910a5b1?w=600&q=80&auto=format&fit=crop" },
    { model: "Kia Seltos", type: "SUV", rate: 75, available: false, image: "https://images.unsplash.com/photo-1633619946656-159bb0448e59?w=600&q=80&auto=format&fit=crop" },
    { model: "Tesla Model 3", type: "EV", rate: 120, available: true, image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&q=80&auto=format&fit=crop" },
];

const connnection = mongoose.connect(process.env.MONGODB_URL) //This because it establishes connection and 

//Inserting into database 
//deleteMany and insertMany are the method provided by mongoose model 
await car.deleteMany({}); //if data exists then delete it 
await car.insertMany(CARS); //then insert the data into database

export default CARS;

