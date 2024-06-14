import { z } from "zod";
import { BookingStatus } from "./booking.interface";

export const bookingValidation = z.object({
 body:z.object({
  date: z.string(),
  startTime: z.string(),
  endTime: z.string(),
  user: z.string().optional(),
  facility: z.string().optional(),
  payableAmount: z.number().optional(),
  isBooked: z
    .enum([
      BookingStatus.Unconfirmed,
      BookingStatus.Confirmed,
      BookingStatus.Cancelled,
    ])
    .default(BookingStatus.Unconfirmed),
 })
});
