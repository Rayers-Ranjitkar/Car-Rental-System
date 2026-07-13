import bookings from "../data/bookings.js";
//Models don't know anything about HTTP methods (GET, POST, PUT, DELETE). It just interacts with database.  Model = database Operations (CRUD).

export function add(booking) {
  bookings.push(booking);
}

export function cancel(id) {
  const booking = bookings.find(b => b.id == id); //in arrow func first b = params we are sending and it returns b.id == id (when true)

  if (booking) {
    booking.status = "Cancelled";
  }

  return booking;
}