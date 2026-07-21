import { Router } from "express";
import * as carController from "../controllers/carController.js";
import {carRules, handleCarValidation} from "../validators/carValidator.js";

//to authenticate token
import authenticate from "../Middlewares/auth.js"; //yauta matra kura in default export rakhda no need to use { } , as { } means destructuring ok

const router = Router();

router.get("/cars", carController.getCars);

//validation
//router.post("/cars", carController.addCar); //carController.addCar is response cauz yo ma return gareko cha response
//router.post(request, response); //so middleware yo bich ma huncha 
router.post("/cars", authenticate, carRules, handleCarValidation, carController.addCar);

//update and delete
router.put("/cars/:id", authenticate, carRules, handleCarValidation, carController.updateCar);
router.delete("/cars/:id", authenticate, carController.deleteCar); //middlewares between req and response

export default router;
