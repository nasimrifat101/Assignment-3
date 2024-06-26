import { Router } from "express";
import { facilityRoutes } from "../modules/facility/facility.routes";
import { authRoute } from "../modules/user/auth/auth.routes";
import { availabilityRoute } from "../modules/booking/Availability/Availability.routes";
import { bookingRoute } from "../modules/booking/booking.routes";

const router = Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: authRoute,
  },
  {
    path: "/check-availability",
    route: availabilityRoute,
  },
  {
    path: "/facility",
    route: facilityRoutes,
  },
  {
    path: "/bookings",
    route: bookingRoute,
  }
];

moduleRoutes.forEach(({ path, route }) => {
  router.use(path, route);
});

export default router;
