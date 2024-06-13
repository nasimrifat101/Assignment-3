import { Schema, model, Types } from "mongoose";
import { BookingStatus, IBooking } from "./booking.interface";

export const bookingSchema = new Schema<IBooking>({
  date: {
    type: String,
  },
  startTime: {
    type: String,
  },
  endTime: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  facility: {
    type: Schema.Types.ObjectId,
    ref: "Facility",
  },
  payableAmount: {
    type: Number,
  },
  isBooked: {
    type: String,
    enum: Object.values(BookingStatus),
    default: BookingStatus.Unconfirmed,
  },
});


export const BookingModel = model<IBooking>("Booking", bookingSchema);
