import { IBooking } from "./booking.interface";
import { BookingModel } from "./booking.model";

const createBookingsIntoDb = async (data: IBooking) => {
  const result = await BookingModel.create(data);
  return result;
};


const getAllBookingsFromDb = async () => {
  const bookings = await BookingModel.find()
    .populate('facility')
    .populate('user');
  return bookings;
};

export const bookingsServices = {
  createBookingsIntoDb,
  getAllBookingsFromDb
};
