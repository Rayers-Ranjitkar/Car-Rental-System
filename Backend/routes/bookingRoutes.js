import { Router } from "express";
import * as bookingController from "../controllers/bookingController.js";

const router = Router();

router.post("/bookings", bookingController.addBooking);
router.put("/bookings/:id/cancel", bookingController.cancelBooking); //:id means "Whatever comes here, store it in req.params.id.

export default router;