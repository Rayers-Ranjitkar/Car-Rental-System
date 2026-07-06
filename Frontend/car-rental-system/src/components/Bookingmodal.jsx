import { useState } from "react";

// New component for Week 2 , a popup for Book now btn : select dates (start/end), compute total cost (days × rate)"
export default function BookingModal({ car, onClose, onConfirm }) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Calculating no. of days between the two dates picked
  // Date object bata milliseconds nikalera 1000*60*60*24 le divide garda din count aaucha
  let days = 0;
  if (startDate && endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = end - start;
    days = Math.round(diffTime / (1000 * 60 * 60 * 24));
  }

  const totalCost = days > 0 ? days * car.rate : 0;

  function handleConfirm(e) {
    e.preventDefault();

    if (!startDate || !endDate || days <= 0) {
      alert("Please choose a valid date range (end date should be after start date)");
      return; 
    }

    onConfirm({ startDate, endDate, totalCost });
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <form
        onSubmit={handleConfirm}
        className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm space-y-4"
      >
        <h2 className="text-xl font-bold">Book {car.model}</h2>
        <p className="text-gray-500 text-sm">${car.rate}/day</p>

        <label className="block text-sm font-medium">
          Start Date
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="border p-2 rounded w-full mt-1"
            required
          />
        </label>

        <label className="block text-sm font-medium">
          End Date
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="border p-2 rounded w-full mt-1"
            required
          />
        </label>

        {/* As soon as both dates are picked calculating live total cost preview */}
        {days > 0 && (
          <p className="text-lg font-semibold text-[#1d7a4f]">
            Total: {days} day{days > 1 ? "s" : ""} × ${car.rate} = ${totalCost}
          </p>
        )}

        <div className="flex gap-3">
          <button
            type="submit"
            className="flex-1 bg-[#288de1] text-white py-2 rounded-lg font-medium hover:bg-[#1c6fb8]"
          >
            Confirm Booking
          </button>
          <button
            type="button"
            onClick={onClose}
            className="flex-1 bg-gray-200 py-2 rounded-lg font-medium hover:bg-gray-300"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}