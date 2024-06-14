import { IBooking } from "./booking.interface";
import { BookingModel } from "./booking.model";

const createBookingsIntoDb = async (data: IBooking) => {
  const result = await BookingModel.create(data);
  return result;
};

const getAllBookingsFromDb = async () => {
  const bookings = await BookingModel.find()
    .populate("facility")
    .populate("user");
  return bookings;
};

const getBookingsForUserDb = async (id: string) => {
  const bookings = await BookingModel.find({ user: id }).populate("facility");
  return bookings;
};

export const bookingsServices = {
  createBookingsIntoDb,
  getAllBookingsFromDb,
  getBookingsForUserDb,
};
