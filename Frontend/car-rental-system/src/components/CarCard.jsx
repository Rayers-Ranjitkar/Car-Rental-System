import { useState } from "react";
import BookingModal from "./BookingModal";

export default function CarCard({
  id,
  model,
  type,
  rate,
  available,
  image,
  onBook,
  onCancel,
}) {
  // local state matra, yo modal open/close garna use huncha, App.jsx samma pathaunu pardaina
  const [showModal, setShowModal] = useState(false);

  function handleConfirmBooking(bookingDetails) {
    onBook(id, bookingDetails); // parent (App.jsx) ma booking process garne
    setShowModal(false); // After booking, closing the modal automatically 
  }

  function handleCancelBooking() {
    // Week 2 : After "Cancel booking → restoring car to 'Available'"
    onCancel(id);
  }

  return (
    <div className="bg-[#FFF9D2] rounded-xl shadow-md p-4 max-w-sm w-full">
      {/* Image Placeholder */}
      <div className="bg-[#BFDDF0] h-40 rounded-lg overflow-hidden">
        <img
          src={image}
          alt={model}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Availability Badge */}
      <span
        className={`inline-block mt-3 px-3 py-1 rounded-full text-sm font-medium text-white ${
          available ? "bg-emerald-600" : "bg-rose-600"
        }`}
      >
        {available ? "Available" : "Rented"}
      </span>

      {/* Model */}
      <h3 className="mt-3 text-xl font-bold">{model}</h3>

      {/* Type */}
      <p className="text-gray-600">{type}</p>

      {/* Rate */}
      <p className="mt-2 font-semibold">
        ${rate}/day
      </p>
      {/* inside {} we write JS as return bhitra matrai HTML huncha so, how to write JS , like this ok */}

      {/* Button */}
      {/* Week 2:
          - available == true  -> Book Now
          - available == false -> Cancel Booking

          JSX ma if/else directly lekhna mildaina, so ternary operator (? :) use gareko.
      */}
      {available ? (
        <button
          onClick={() => setShowModal(true)}
          className="mt-4 w-full bg-[#8CC0EB] hover:bg-[#6fa9db] py-2 rounded-lg font-medium"
        >
          Book Now
        </button>
      ) : (
        <button
          onClick={handleCancelBooking}
          className="mt-4 w-full bg-rose-100 text-rose-700 hover:bg-rose-200 py-2 rounded-lg font-medium"
        >
          Cancel Booking
        </button>
      )}

      {/* Modal */}
      {/* Modal chai conditionally render garcha, showModal true vayeko bela matra.
          showModal false huda BookingModal component render nai hudaina. */}
      {showModal && (
        <BookingModal
          car={{ model, rate }}
          /* object pass gareko because modal lai model ra rate duitai chaincha so*/
          onClose={() => setShowModal(false)}
          onConfirm={handleConfirmBooking}
        />
      )}
    </div>
  );
}