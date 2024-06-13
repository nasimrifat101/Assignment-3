import { Types } from "mongoose";

export enum BookingStatus {
    Confirmed = 'confirmed',
    Unconfirmed = 'unconfirmed',
    Cancelled = 'cancelled'
  }

export type IBooking = {
  date: string;
  startTime: string;
  endTime: string;
  user: Types.ObjectId;
  facility: Types.ObjectId;
  payableAmount: number;
  isBooked: BookingStatus;
};
