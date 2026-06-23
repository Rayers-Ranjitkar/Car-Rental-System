export default function CarCard() {
  return (
    <div className="bg-[#FFF9D2] rounded-xl shadow-md p-4 w-80">
      {/* Image Placeholder */}
      <div className="bg-[#BFDDF0] h-40 rounded-lg flex items-center justify-center">
        Car Image
      </div>

      {/* Availability Badge */}
      <span className="inline-block mt-3 px-3 py-1 rounded-full bg-[#FFEBCC] text-sm font-medium">
        Available
      </span>

      {/* Model */}
      <h3 className="mt-3 text-xl font-bold">Toyota Corolla</h3>

      {/* Type */}
      <p className="text-gray-600">Sedan</p>

      {/* Rate */}
      <p className="mt-2 font-semibold">$50/day</p>

      {/* Button */}
      <button className="mt-4 w-full bg-[#8CC0EB] hover:bg-[#BFDDF0] py-2 rounded-lg font-medium">
        Book Now
      </button>
    </div>
  );
}
