import CarCard from "./components/carCard"

export default function App(){ //default = multiple export huda pani default ma yehe return garedincha 
  //return <Title /> //This calls the function named as title 
  return  ( 
  <div> 
    <Title /> 
    <CarCard />
  </div>
  )
}



function Title(){
  return(

    <div> 
      <h1 className="bg-purple-300 text-2xl text-red-600 flex justify-center">Car Rental System</h1>
    </div> 

)

}