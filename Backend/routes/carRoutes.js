import { Router } from "express";
import * as carController from "../controllers/carController.js";

const router = Router();

router.get("/cars", carController.getCars);
router.post("/cars", carController.addCar);

export default router;