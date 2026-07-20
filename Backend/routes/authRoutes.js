import * as  AuthController from '../controllers/authControllers.js'

import { Router } from 'express';

const router = Router();

router.post('/register',AuthController.Register);
router.post('/login',AuthController.Login);


export default AuthController