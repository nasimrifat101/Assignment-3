import { catchAsync } from "../../../utils/catchAsync";
import { noDataFound } from "../../../utils/noDataFound";
import { BookingModel } from "../booking.model";

const checkAvailability = catchAsync(async (req, res) => {
  const { date } = req.query;
  const bookingDate = date ? new Date(date as string) : new Date();

  bookingDate.setHours(0, 0, 0, 0);

  const bookings = await BookingModel.find({
    date: bookingDate,
  });


  const totalSlots = [
    {startTime: '08:00', endTime: '10:00'},
    {startTime: '10:00', endTime: '12:00'},
    {startTime: '12:00', endTime: '14:00'},
    {startTime: '14:00', endTime: '16:00'},
    {startTime: '16:00', endTime: '18:00'},
    {startTime: '18:00', endTime: '20:00'},
  ]

  const availableSlots = totalSlots.filter((slot)=>{
    return !bookings.some((booking)=>{
        const bookingStart = new Date(booking.startTime).getHours();
        const bookingEnd = new Date(booking.endTime).getHours();

        const slotStart = new Date(slot.startTime.split(':')[0]).getHours();
        const slotEnd = new Date(slot.endTime.split(':')[0]).getHours();

        return bookingStart < slotStart && bookingEnd > slotEnd;
    })
  })

  if (!availableSlots) {
    return noDataFound(res);
  }

  res.json({
    success: true,
    statusCode: 200,
    message: "Availability checked successfully",
    data: availableSlots,
  });
});


export const availabilityController = {
  checkAvailability
}