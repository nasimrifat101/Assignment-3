import { IBooking } from "./booking.interface";
import { BookingModel } from "./booking.model";

const createBookingsIntoDb = async (data: IBooking) => {
  const result = await BookingModel.create(data);
  return result;
};

export const bookingsServices = {
  createBookingsIntoDb,
};
