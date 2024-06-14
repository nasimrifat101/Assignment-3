import { Router } from "express";
import { availabilityController } from "./Avayliability.controllers";

const router = Router();

router.get("/", availabilityController.checkAvailability);

export { router as availabilityRoute };
