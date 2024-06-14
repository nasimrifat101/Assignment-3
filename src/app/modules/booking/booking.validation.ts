import { z } from "zod";
import { BookingStatus } from "./booking.interface";

export const bookingValidation = z.object({
  date: z.string(),
  startTime: z.string(),
  endTime: z.string(),
  user: z.string().nonempty("User ID is required"),
  facility: z.string().nonempty("Facility ID is required"),
  payableAmount: z.number().positive("Payable amount must be positive"),
  isBooked: z
    .enum([
      BookingStatus.Unconfirmed,
      BookingStatus.Confirmed,
      BookingStatus.Cancelled,
    ])
    .default(BookingStatus.Unconfirmed),
});
