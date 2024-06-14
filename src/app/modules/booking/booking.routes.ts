import { Router } from "express";
import { bookingController } from "./booking.controllers";
import { jwtAuth } from "../../middlewears/jwtAuthentication";
import { isAdmin } from "../../middlewears/isAdmin";
import { validateReq } from "../../middlewears/ValidateRequest";
import { bookingValidation } from "./booking.validation";

const router = Router();

router.post("/",validateReq(bookingValidation) ,jwtAuth, bookingController.createBooking);

router.get("/", jwtAuth, isAdmin, bookingController.getAllBookings);

router.get("/user", jwtAuth, bookingController.getUserBookings);

router.delete("/user/:id", jwtAuth, bookingController.cancelUserBooking);

export { router as bookingRoute };
