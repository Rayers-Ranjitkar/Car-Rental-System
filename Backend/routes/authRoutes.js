import * as  AuthController from '../controllers/authController.js'

import { Router } from 'express';

const router = Router();

console.log("Auth routes loaded");

//test route
router.get("/test", (req, res) => {
    res.send("Auth route is working");
});

router.post('/register',AuthController.registeredUser);
// router.post('/login',AuthController.Login);


//export default authControlelr; //no we export router from all routes hai
export default router;