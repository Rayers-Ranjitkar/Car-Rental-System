import CarCard from "./CarCard.jsx";
import AddNewButton from "./AddNewButton.jsx";
import { useState } from "react";
import AddCardForm from "./AddCarForm.jsx";

export default function CarGrid() {
  /* Make car array and put them in another file say cars.jsx and then use map to add that when the button is clicked */
  const [isClicked, setIsClicked] = useState(false);

  /* Cars State */
  const [cars, setCars] = useState([
    { model: "Toyota Corolla", type: "Sedan", rate: 50, available: true },
    { model: "Honda Civic", type: "Sedan", rate: 55, available: false },
    { model: "Hyundai Creta", type: "SUV", rate: 70, available: true },
    { model: "Kia Seltos", type: "SUV", rate: 75, available: false },
    { model: "Tesla Model 3", type: "Electric", rate: 120, available: true },
  ]);

  /* Function to add cars */
  function addCar(newCar) {
    setCars([...cars, newCar]);
    setIsClicked(false); // optional: close form after adding
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Using the button component */}
      <AddNewButton
        data="Add New Car"
        onClick={() => {
          setIsClicked(true);
        }}
      />{" "}
      {/* oh so, yo setIsClicked bhanney state function we are sending from child to the parent, to change it's state in the parent button file when the user clicks it */}
      {/* Add Card Form */}
      {isClicked && <AddCardForm onAdd={addCar} />}
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
      {/* Using Map function to map the state of the cars */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {cars.map((car, index) => (
          <CarCard
            key={index}
            model={car.model}
            type={car.type}
            rate={car.rate}
            available={car.available}
          />
        ))}
      </div>

      
    </div>
  );
}
