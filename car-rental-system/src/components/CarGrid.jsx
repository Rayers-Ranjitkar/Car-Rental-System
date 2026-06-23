import CarCard from './CarCard.jsx'

export default function CarGrid() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <CarCard />
      <CarCard />
      <CarCard />
      <CarCard />
      <CarCard />
    </div>
  );
}