import { Router } from "express";
import { bookingController } from "./booking.controllers";
import { jwtAuth } from "../../middlewears/jwtAuthentication";
import { validateReq } from "../../middlewears/ValidateRequest";
import { bookingValidation } from "./booking.validation";
import { isAdmin } from "../../middlewears/isAdmin";

const router = Router();

router.post("/", jwtAuth, bookingController.createBooking);

router.get("/", jwtAuth, isAdmin, bookingController.getAllBookings);

export { router as bookingRoute };
