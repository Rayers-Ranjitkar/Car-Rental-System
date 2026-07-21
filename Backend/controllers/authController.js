import * as AuthModel from "../models/authModel.js";

import {generateToken} from "../utils/auth.js"

//same functions as Model but we do error handling in controller + req ra response huncha 

export async function registeredUser(req, res){
    const user = await AuthModel.register(req.body);
    
    if(user){
        const token = generateToken(user);
        return res.status(201).json({message: 'Successfully Registered', data: {
            _id: user._id, 
            name:user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token
        }});
    }
}

// do for logged in User as well    

//add validators in here as well