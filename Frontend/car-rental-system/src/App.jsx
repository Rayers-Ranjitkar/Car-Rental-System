import { useState, useEffect } from "react"
import CarGrid from "./components/CarGrid"
import Navbar from "./components/Navbar"
import {BrowserRouter, Routes, Route} from  "react-router-dom" //External package bata aauney bhayera we write those in { } 
import AddCarForm from "./components/AddCarForm" 

// default image 
const DEFAULT_CAR_IMAGE = "https://images.unsplash.com/photo-1559038465-e0ca2910a5b1?w=600&q=80&auto=format&fit=crop"

export default function App(){ //default = multiple export huda pani default ma yehe return garedincha 

  // Week 2: state lifted up from CarGrid.jsx to here, state chai common parent (App) ma nai hunu parxa
  const [cars, setCars] = useState([
    { id: 1, model: "Toyota Corolla", type: "Sedan", rate: 50, available: true, image: "https://images.unsplash.com/photo-1559385988-439b04de16f8?w=600&q=80&auto=format&fit=crop" },
    { id: 2, model: "Honda Civic", type: "Sedan", rate: 55, available: false, image: "https://images.unsplash.com/photo-1561823528-057f4774dd3e?w=600&q=80&auto=format&fit=crop" },
    { id: 3, model: "Hyundai Creta", type: "SUV", rate: 70, available: true, image: "https://images.unsplash.com/photo-1559038465-e0ca2910a5b1?w=600&q=80&auto=format&fit=crop" },
    { id: 4, model: "Kia Seltos", type: "SUV", rate: 75, available: false, image: "https://images.unsplash.com/photo-1633619946656-159bb0448e59?w=600&q=80&auto=format&fit=crop" },
    { id: 5, model: "Tesla Model 3", type: "Electric", rate: 120, available: true, image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&q=80&auto=format&fit=crop" },
  ]);

  // bookings array with booking details (dates, total cost) 
  const [bookings, setBookings] = useState([]);


  // cars state change hune bittikai yo chalcha (dependency array ma cars diyeko bhayera)
  useEffect(() => {
    const availableCount = cars.filter((car) => car.available).length;
    document.title = `Car Rental System - ${availableCount} Available`;
  }, [cars]);

  // Add car (from /add page form)
function addCar(newCar) {
    const car = {
      id: Date.now(), // Date.now() lai id ko lagi use gareko
      ...newCar,
      // fallback if the user leaves the URL option empty
      image: newCar.image && newCar.image.trim() !== "" ? newCar.image : DEFAULT_CAR_IMAGE,
    };
    setCars([...cars, car]);
}

  // Confirm booking for making lai rented and pushing it to booking array
  function bookCar(carId, bookingDetails) {
    setCars(
      cars.map((car) =>
        car.id === carId ? { ...car, available: false } : car
      )
    );
    setBookings([...bookings, { carId, ...bookingDetails }]);
  }

  // Cancel booking for making the cars reavailable
  function cancelBooking(carId) {
    setCars(
      cars.map((car) =>
        car.id === carId ? { ...car, available: true } : car
      )
    );
    setBookings(bookings.filter((b) => b.carId !== carId));
  }

  return  ( 
  <div className="min-h-screen bg-[#F5F7FA]"> 
    <BrowserRouter> {/* The thing we had wrapped in browser router, we can access it using /Navbar or /CarGrid, whole app lai  */}
      <Navbar />
      <Routes> {/* CarGrid is one of my page so each pages lai chahi we wrap in routes so that can access using /carGrid, multiple page lai wrap   */}
        {/*Since, cars and bookings state is in App.jsx, so sending the props */}
        <Route path="/" element={ <CarGrid cars={cars} onBook={bookCar} onCancel={cancelBooking} /> }></Route> 
        <Route path="/add" element={ <AddCarForm onAdd={addCar} /> }></Route> 
      </Routes>
      
    </BrowserRouter>
  </div>
  )
}


/* test function */
function Title(){
  return(

    <div> 
      <h1 className="bg-purple-300 text-2xl text-red-600 flex justify-center">Car Rental System</h1>
    </div> 

)

}