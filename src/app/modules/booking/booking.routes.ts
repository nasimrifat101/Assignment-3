import { Router } from "express";
import { bookingController } from "./booking.controllers";
import { jwtAuth } from "../../middlewears/jwtAuthentication";
import { validateReq } from "../../middlewears/ValidateRequest";
import { bookingValidation } from "./booking.validation";

const router = Router();

router.post(
  "/",
  jwtAuth,
  bookingController.createBooking
);

export { router as bookingRoute };
