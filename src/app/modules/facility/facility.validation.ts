import { z } from "zod";

export const facilityValidation = z.object({
  body: z.object({
    name: z.string(),
    description: z.string(),
    pricePerHour: z.number(),
    location: z.string(),
    isDeleted: z.boolean().optional().default(false),
  }),
});
