import { z } from "zod";
import { BookingStatus } from "./booking.interface";

export const bookingValidation = z.object({
  date: z.string().nonempty("Date is required"),
  startTime: z.string().nonempty("Start time is required"),
  endTime: z.string().nonempty("End time is required"),
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
