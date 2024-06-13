import { Router } from "express";
import { validateReq } from "../../../middlewears/ValidateRequest";
import { userValidation } from "../user.validation";
import { authController } from "./auth.controllers";

const router = Router();

router.post("/signup", validateReq(userValidation), authController.signupUser);
router.post("/login", authController.loginUser);

export { router as authRoute };

