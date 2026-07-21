// import jwt from 'jsonwebtoken';
// import dotenv from 'dotenv';

// dotenv.config({path:'../.env'})

// //generate token and validate

// // export const generateToken = (user) =>{
// //     return jwt.sign(
// //         {_id: user._id, isAdmin: user.isAdmin},
// //     'secret',{expiresIn: "1d",}); //1D pachi it experies and we need to again login //hacker lai data thahapaye pani 'secret' key thaha napaye samma crack garnu sakdainan 
// // }

// const JWT_SECRET = process.env.JWT_SECRET || IfawFdvoftcvu8uFqzs3gD5QrrJyUmPTfe50sfV6Cy5;

// // export const generateToken = (user) =>{
// //     return jwt.sign(
// //         {_id: user._id, isAdmin: user.isAdmin},
// //     'secret',{expiresIn: "1d",}); //1D pachi it experies and we need to again login //hacker lai data thahapaye pani 'secret' key thaha napaye samma crack garnu sakdainan 
// // }


// export const generateToken = (user) =>{
//     return jwt.sign(
//         {_id: user._id, isAdmin: user.isAdmin},
//     'JWT_SECRET',{expiresIn: "1d",}); //1D pachi it experies and we need to again login //hacker lai data thahapaye pani 'secret' key thaha napaye samma crack garnu sakdainan 
// }

// export const verifyToken = (token) =>{
//     return jwt.verify(token, 'JWT_SECRET');
// }




import { verifyToken } from '../utils/auth.js'
const authenticate = (req, res, next) => {
  const token = req.headers.authorization
  console.log(token)
  if (!token || !token.startsWith('Bearer '))
    return res.status(401).json({ error: 'Unauthorized' })
  const isValid = verifyToken(token.split(' ')[1]) //we just want 2nd part so 
  if (!isValid) return res.status(401).json({ error: 'Invalid Token' })
  next()
}

export default authenticate