import CarCard from "./CarCard.jsx";

export default function CarGrid() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <CarCard model="Toyota Corolla" type="Sedan" rate={50} available={true} />
        <CarCard model="Honda Civic" type="Sedan" rate={55} available={false} />
        <CarCard model="Hyundai Creta" type="SUV" rate={70} available={true} />
        <CarCard model="Kia Seltos" type="SUV" rate={75} available={false} />
        <CarCard model="Tesla Model 3" type="Electric" rate={120} available={true} />
      </div>
    </div>
  );
}
