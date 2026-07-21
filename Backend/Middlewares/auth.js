import {verifyToken} from "../utils/auth.js"

//always middle ware ko paramter haru 3 ota huncha, req, res ra next
const authenticate = (req, res, next) => {
    //user ley pathako token
    const token = req.header.authorization ; //yo ma aaucha as now we won't send in body but will send in header that is why 

    if(!token){
        return res.status(401).json({
            error: 'unauthorized'
        } )          //400 = bad request //404 = not found //401 = unauthorized
    }

    const isValid = verifyToken(token);
        if(!isValid){
        return res.status(401).json({
            error: 'bad token'
        } )          //400 = bad request //404 = not found //401 = unauthorized
    }
}

//middleware lai we use in routes
export default authenticate;
