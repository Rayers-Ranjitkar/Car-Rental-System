//usermodel ko satta auth model rakhem for it to handle signup , login and role check functions

import User from "../data/user.js";

export async function register(userDetails){
    return User.create(userDetails); //functions applicable in model is .create, .findOne
}

export async function login(email,password){ //but this is password so 
    const user = await User.findOne({email});

    const isValid = await bcrypt.compare(password,User.password) //if the passwords match then it will return true and if they don't match then it will return false;

    return isValid ? user: null;

}