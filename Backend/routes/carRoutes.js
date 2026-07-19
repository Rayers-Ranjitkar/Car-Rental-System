import { Router } from "express";
import * as carController from "../controllers/carController.js";
import {carRules, handleCarValidation} from "../validators/carValidator.js";

const router = Router();

router.get("/cars", carController.getCars);

//validation
//router.post("/cars", carController.addCar); //carController.addCar is response cauz yo ma return gareko cha response
//router.post(request, response); //so middleware yo bich ma huncha 
router.post("/cars", carRules, handleCarValidation, carController.addCar);

//update and delete
router.put("/cars/:id", carRules, handleCarValidation, carController.updateCar);
router.delete("/cars/:id", carController.deleteCar);

export default router;
