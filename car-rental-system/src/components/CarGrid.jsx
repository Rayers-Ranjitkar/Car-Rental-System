import CarCard from "./CarCard.jsx";
import AddNewButton from "./AddNewButton.jsx"
import { useState } from "react";
import AddCardForm from "./AddCarForm.jsx";

export default function CarGrid() {
    /* Make car array and put them in another file say cars.jsx and then use map to add that when the button is clicked */
    const [isClicked, setIsClicked] = useState(false);


  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

    {/* Using the button component */}
     <AddNewButton data="Add New Car" onClick={()=> {setIsClicked(true)} }  />

    {/* Add Card Form */}
    {isClicked && <AddCardForm />}


    {/* Default card grids */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <CarCard model="Toyota Corolla" type="Sedan" rate={50} available={true} /> {/* can pass array and use map */}
        <CarCard model="Honda Civic" type="Sedan" rate={55} available={false} /> {/* These passed things are the props */}
        <CarCard model="Hyundai Creta" type="SUV" rate={70} available={true} />
        <CarCard model="Kia Seltos" type="SUV" rate={75} available={false} />
        <CarCard model="Tesla Model 3" type="Electric" rate={120} available={true} />
      </div>
    </div>
  );
}
