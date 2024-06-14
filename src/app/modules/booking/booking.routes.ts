import { Router } from "express";
import { bookingController } from "./booking.controllers";
import { jwtAuth } from "../../middlewears/jwtAuthentication";
import { isAdmin } from "../../middlewears/isAdmin";

const router = Router();

router.post("/", jwtAuth, bookingController.createBooking);

router.get("/", jwtAuth, isAdmin, bookingController.getAllBookings);

router.get("/user", jwtAuth, bookingController.getUserBookings);

router.delete("/user/:id", jwtAuth, bookingController.cancelUserBooking);

export { router as bookingRoute };
