import * as AuthModel from authModel.js;

//same functions as Model but we do error handling in controller + req ra response huncha 

export async function registeredUser(req, res){
    const user = await AuthModel.register(req.body);
    
    if(user){
        return res.status(201).json({message: 'Successfully Registered', data: {...user}});
    }
}

// do for logged in User as well    

//add validators in here as well