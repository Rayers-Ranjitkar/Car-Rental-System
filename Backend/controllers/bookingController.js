import * as  BookingModel from "../models/bookingModel.js";

//for adding booking: POST
export function addBooking(req, res) {
  //const booking = req.body; //right now our request just has the body sent by postman and no ID and booking Status but we'll now attach id and status in the req ko body
  const booking = {
  id: Date.now(),
  status: "Active",
  ...req.body, // spread operator
};

  BookingModel.add(booking);
  
  return res.status(201).json({
    message: "Booking Done successfully",
    data: booking,
  });
}

//for cancel booking: PUT
export function cancelBooking(req, res) {
  //For cancelling: PUT /api/bookings/5/cancel -> Where is the number 5? Not in the body. Not in query parameters. It's inside the URL = req.params
  const id = req.params.id;

  const booking = BookingModel.cancel(id);

  if (!booking) {
    return res.status(404).json({
      message: "Booking not found",
    });
  }

  return res.status(200).json({
    message: "Booking cancelled successfully",
    data: booking,
  });
}