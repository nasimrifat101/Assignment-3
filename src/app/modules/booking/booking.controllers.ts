import { Types } from "mongoose";
import { CalculateAmount } from "../../utils/calculatePayableAmmount";
import { catchAsync } from "../../utils/catchAsync";
import { FacilityModel } from "../facility/facility.model";
import { BookingStatus, IBooking } from "./booking.interface";
import { BookingModel } from "./booking.model";
import { bookingsServices } from "./booking.services";
import { noDataFound } from "../../utils/noDataFound";

const createBooking = catchAsync(async (req, res) => {
  const { facility, date, startTime, endTime } = req.body;

  const existingBookings = await BookingModel.find({ facility, date });

  const slotStart = new Date(`${date}T${startTime}`).getTime();
  const slotEnd = new Date(`${date}T${endTime}`).getTime();

  const isAvailable = !existingBookings.some((booking) => {
    const bookingStart = new Date(
      `${booking.date}T${booking.startTime}`
    ).getTime();
    const bookingEnd = new Date(`${booking.date}T${booking.endTime}`).getTime();
    return slotStart < bookingEnd && slotEnd > bookingStart;
  });

  if (!isAvailable) {
    return res.status(400).json({
      success: false,
      status: 400,
      message: "Facility is unavailable during the requested time slot",
    });
  }

  const facilityData = await FacilityModel.findById(facility);

  if (!facilityData) {
    return res
      .status(404)
      .json({ success: false, message: "Facility not found" });
  }

  const payableAmount = CalculateAmount(
    startTime,
    endTime,
    facilityData.pricePerHour
  );

  const bookingsData: IBooking = {
    date,
    startTime,
    endTime,
    user: new Types.ObjectId(req.user!.id),
    facility: new Types.ObjectId(facility),
    payableAmount,
    isBooked: BookingStatus.Confirmed,
  };

  const result = await bookingsServices.createBookingsIntoDb(bookingsData);

  return res.status(200).json({
    success: true,
    status: 200,
    message: "Booking created successfully",
    data: result,
  });
});

const getAllBookings = catchAsync(async (req, res) => {
  const result = await bookingsServices.getAllBookingsFromDb();
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Bookings retrieved successfully",
    data: result,
  });
});

const getUserBookings = catchAsync(async (req, res) => {
  const result = await bookingsServices.getBookingsForUserDb(req.user!.id);
  if (!result) {
    return noDataFound(res);
  }
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Bookings retrieved successfully",
    data: result,
  });
});

const cancelUserBooking = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await bookingsServices.cancelBookingUserDb(id);
  if (!result) {
    return noDataFound(res);
  }
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Booking cancelled successfully",
    data: result,
  });
});

export const bookingController = {
  createBooking,
  getAllBookings,
  getUserBookings,
  cancelUserBooking,
};
