import { NextFunction, Request, Response } from "express";
import { MongoError } from "mongodb";
import mongoose from "mongoose";

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 500;
  let message = "Internal Server Error";
  let errorMessages: { path: string; message: string }[] = [];
  let stack = err.stack || "";

  if (err instanceof mongoose.Error.ValidationError) {
    statusCode = 400;
    message = "Validation Error";
    errorMessages = Object.values(err.errors).map((error: any) => ({
      path: error.path,
      message: error.message,
    }));
  } else if (err instanceof mongoose.Error.CastError) {
    statusCode = 400;
    message = "Cast Error";
    errorMessages.push({ path: err.path, message: err.message });
  } else if (err instanceof MongoError && err.code === 11000) {
    statusCode = 400;
    message = "Duplicate Entry";
    errorMessages.push({
      path: "",
      message: err.message,
    });
  } else if (err.message) {
    message = err.message;
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack,
  });
};
