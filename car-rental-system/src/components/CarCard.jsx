

export default function CarCard({model,type,rate,available}) {
  return (
    <div className="bg-[#FFF9D2] rounded-xl shadow-md p-4 max-w-sm w-full">
      {/* Image Placeholder */}
      <div className="bg-[#BFDDF0] h-40 rounded-lg flex items-center justify-center">
        Car Image
      </div>

      {/* Availability Badge */}
        <span className={`inline-block mt-3 px-3 py-1 rounded-full text-sm font-medium text-white ${
            available ? "bg-green-600" : "bg-red-600"}`}
        >
        {available ? "Available" : "Rented"}
        </span>

      {/* Model */} 
      <h3 className="mt-3 text-xl font-bold">{model}</h3>

      {/* Type */}
      <p className="text-gray-600">{type}</p>

      {/* Rate */}
      <p className="mt-2 font-semibold">${rate}/day</p> {/* inside {} we write JS as return bhitra matrai HTML huncha so, how to write JS , like this ok  */}

      {/* Button */}
      <button className="mt-4 w-full bg-[#8CC0EB] hover:bg-[#BFDDF0] py-2 rounded-lg font-medium">
        Book Now
      </button>
    </div>
  );
}
