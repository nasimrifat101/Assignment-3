import { Types } from "mongoose";
import { CalculateAmount } from "../../utils/calculatePayableAmmount";
import { catchAsync } from "../../utils/catchAsync";
import { FacilityModel } from "../facility/facility.model";
import { BookingStatus, IBooking } from "./booking.interface";
import { BookingModel } from "./booking.model";
import { bookingsServices } from "./booking.services";


const createBooking = catchAsync(async (req, res) => {
  const { facility, date, startTime, endTime } = req.body;

  const existingBooking = await BookingModel.find({ facility, date });

  const isAvailable = !existingBooking.some((booking) => {
    const bookingStart = new Date(booking.startTime).getHours();
    const bookingEnd = new Date(booking.endTime).getHours();
    const slotStart = new Date(startTime).getHours();
    const slotEnd = new Date(endTime).getHours();
    return bookingStart <= slotStart && bookingEnd >= slotEnd;
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
    return res.status(404).json({ success: false, message: "Facility not found" });
  }


  const payableAmount = CalculateAmount(startTime, endTime, facilityData.pricePerHour);

  // Debugging log
  console.log('Calculated payable amount:', payableAmount);

  if (isNaN(payableAmount)) {
    return res.status(500).json({
      success: false,
      message: 'Failed to calculate payable amount',
    });
  }

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

export const bookingController = {
  createBooking,
};
