import { z } from "zod";

export const userValidation = z
  .object({
    body: z.object({
      name: z.string(),
      email: z.string(),
      password: z.string().min(6).max(20),
      phone: z.string(),
      role: z.enum(["admin", "user"]),
      address: z.string(),
    }),
  });
