import CarGrid from "./components/CarGrid"
import Navbar from "./components/Navbar"
import {BrowserRouter, Routes, Route} from  "react-router-dom" //External package bata aauney bhayera we write those in { } 
import AddCarForm from "./components/AddCarForm" 


export default function App(){ //default = multiple export huda pani default ma yehe return garedincha 
  //return <Title /> //This calls the function named as title 
  return  ( 
  <div> 
    <BrowserRouter> {/* The thing we had wrapped in browser router, we can access it using /Navbar or /CarGrid, whole app lai  */}
      {/* <Title />  */}
      <Navbar />
      <Routes> {/* CarGrid is one of my page so each pages lai chahi we wrap in routes so that can access using /carGrid, multiple page lai wrap   */}
        {/* <CarGrid /> */} {/* Each Page lai chahi wrap inside route */}
        <Route path="/" element={ <CarGrid /> }></Route> {/* Now this is redirection  */}
        <Route path="/add" element={ <AddCarForm /> }></Route> {/* Now this is redirection  */}
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