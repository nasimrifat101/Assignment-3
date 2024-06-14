import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import config from "../config";

interface JwtPayload {
  id: string;
  role: string;
}

export const jwtAuth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).send("Unauthorized");
  }

  try {
    const decoded = jwt.verify(token, config.jwtSecret || "") as JwtPayload;
    req.user = decoded;
    next();
  } catch (error) {
    console.error("Error in authentication middleware:", error);
    res.status(403).json({ message: "Token expired" });
  }
};
