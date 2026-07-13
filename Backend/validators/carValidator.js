//import expressValidator from 'express-validator'; //imports every thing from this package which we don't need
import {body, validationResult} from 'express-validator';

export const carRules = [
    body('model').notEmpty().isString().trim().withMessage('name is required, must bwe a string'), 
    body('rate').notEmpty().isInt({min:1, max:10000}).withMessage('Price must be an integer between 1 and 10000'),
    body('available').notEmpty().isBoolean().withMessage("Available must be boolean"),
 ];

 //to use valitionResult we need to make a function
export const handleCarValidation = (req, res, next) => { //This is a custom middleware function
//next = req ma middleware ley manipulate gareko res samma pugna ko lagi next chahincha, custom Middlewares haru create garda this is required , next rakhnu pareko cha bhani that is middleware ---> app.use(express.json() ) --> yo middleware package bata inbuilt aako ho so no need to keep 'next' 

const error = validationResult(req) ; //This will store the errors if any, else it is empty array []
 	if (!error.isEmpty()) { 
        return res.status(400).json({errors:error.array() } ) //status code learn
}
next(); //aba yes pachi ko kaam garda huncha, it's already intercepted (and error aako xaina)
 }
