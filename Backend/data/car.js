//This file exports carModel made form the car schema

//This is our first MongoDB table 
import mongoose from 'mongoose'; // Connecting to the database using mongoose library.

//Making schema for car 
const carSchema = mongoose.Schema({
      model: { 
        required: true,
        type: String,
        trim: true,
     } ,// model of the car.
      type: { 
        required: true,
        type: String,
        enum: ['EV', 'SUV', 'Sedan', 'Hybrid']
       } ,// type of the car.
      rate: { 
        required: true,
        type: Number } ,// rate of the car.
      available: {
        required: true,
        type: Boolean } ,// available or not.
      image: { 
        required: false,
        type: String } // image url for the car.
})

//Yo car ko schema follow garera car ko data banau 
const car = mongoose.model('carModel1', carSchema, 'carCollection'); 

export default car;