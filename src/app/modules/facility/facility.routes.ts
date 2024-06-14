import { Router } from "express";
import { facilityController } from "./facility.controllers";
import { jwtAuth } from "../../middlewears/jwtAuthentication";
import { isAdmin } from "../../middlewears/isAdmin";
import { validateReq } from "../../middlewears/ValidateRequest";
import { facilityValidation } from "./facility.validation";

const router = Router();

router.post(
  "/",
  validateReq(facilityValidation),
  jwtAuth,
  isAdmin,
  facilityController.createFacility
);

router.put(
  "/:id",
  validateReq(facilityValidation),
  jwtAuth,
  isAdmin,
  facilityController.updateFacility
);

router.delete(
    "/:id", 
    jwtAuth, 
    isAdmin, 
    facilityController.deleteFacility
  );

router.get(
  "/", 
  jwtAuth, 
  facilityController.getFacility
);

export { router as facilityRoutes };
