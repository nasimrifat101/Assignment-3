import { NextFunction, Request, Response } from "express";

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 500;
  let message = "internal server error";

  if (err) {
    message = err.message;
    statusCode = err.status || 500;
  }

  res.status(statusCode).json({
    success: false,
    message,
    data: err,
  });
};
