// types.d.ts

import { Request } from "express";

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        role: string;
        // Add other user properties if needed
      };
    }
  }
}
