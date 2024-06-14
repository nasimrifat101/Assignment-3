import jwt from "jsonwebtoken";
import { catchAsync } from "../../../utils/catchAsync";
import { userServices } from "../user.services";
import config from "../../../config";
import { UserModel } from "../user.model";
import { noDataFound } from "../../../utils/noDataFound";

const signupUser = catchAsync(async (req, res) => {
  const data = req.body;

  if (!data) {
    throw new Error("Invalid data or null");
  }

  const result = await userServices.signupUserIntoDB(data);
  if (!result) {
    return noDataFound(res);
  }
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "User registered successfully",
    data: result,
  });
});

const loginUser = catchAsync(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new Error("Email and password are required");
  }

  const user = await userServices.loginUserIntoDB(email, password);

  if (!user) {
    return noDataFound(res);
  }

  const token = jwt.sign(
    { id: user._id, role: user.role },
    config.jwtSecret as string,
    {
      expiresIn: "2h",
    }
  );

  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "User logged in successfully",
    token: token,
    data: user,
  });
});

export const authController = {
  signupUser,
  loginUser,
};
