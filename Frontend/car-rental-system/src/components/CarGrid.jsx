import CarCard from "./CarCard.jsx";
import AddNewButton from "./AddNewButton.jsx";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

// Week 2 update: removed cars state from here, aba App.jsx bata props ley aaucha (onBook, onCancel pani)

export default function CarGrid({ cars, onBook, onCancel }) {
  /* Filter by type */
  const [filterType, setFilterType] = useState("All");

  // unique types nikalne cars array bata, so dropdown auto update huncha jasari naya car type add garda
  const types = ["All", ...new Set(cars.map((car) => car.type))];

  const filteredCars =
    filterType === "All"
      ? cars
      : cars.filter((car) => car.type === filterType);

  /* Navigate */
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Using the button component */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <AddNewButton
          data="Add New Car"
          onClick={() => {
            /* setIsClicked(true); */
            navigate("/add");
            /* 
              When we do this the button wasn't working before because:
              - as he state wasn't lifted i.e.
              - App.jsx ma cars array, addCar function import/pass bhayeko thiyena

              Week 2:
              aba cars state ra addCar function App.jsx ma xa.
              App.jsx le props bata CarGrid ra AddCar page duitai lai same state pass garcha,
              so /add page bata add gareko car instantly grid ma dekhincha.
            */
          }}
        />

        {/* Filter dropdown */}
        <label className="text-sm font-medium flex items-center gap-2">
          Filter by type:
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="border rounded-lg px-3 py-2"
          >
            {types.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>
      </div>

      {/* Default card grids hardcoded made at first , but now we will map the state as we need to create state as these names are the values of variables that changes the UI so state is required */}

      {/* // can pass array and use map
          // These passed things are the props */}

      {/*
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <CarCard model="Toyota Corolla" type="Sedan" rate={50} available={true} />
        <CarCard model="Honda Civic" type="Sedan" rate={55} available={false} />
        <CarCard model="Hyundai Creta" type="SUV" rate={70} available={true} />
        <CarCard model="Kia Seltos" type="SUV" rate={75} available={false} />
        <CarCard model="Tesla Model 3" type="Electric" rate={120} available={true} />
      </div>
      */}

      {/* Using Map function to map the filtered cars */}
      {/* Week 2: filteredCars use gareko xa instead of cars so dropdown ko selected type matra display huncha */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {filteredCars.map((car) => (
          <CarCard
            key={car.id}
            id={car.id}
            model={car.model}
            type={car.type}
            rate={car.rate}
            available={car.available}
            image={car.image}
            onBook={onBook}
            onCancel={onCancel}
          />
        ))}
      </div>
    </div>
  );
}