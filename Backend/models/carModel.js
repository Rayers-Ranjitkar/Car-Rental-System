//import cars from "../data/Cars.js"; //Here, model was import from the dummy data hai so ---> Rn the data is comming from the dummy car, so we need to import data from DB so we do changes in model file only 
import car from "../data/car.js"; //This was the model made from schema to upload to the DB 

// export function getAll() {
//   // return cars;
//   return car.find(); //using carModel ko methods
// }
//need to make async as DB data aauna time lagcha so 

export async function getAll() {
  // return cars;
  return car.find(); //using carModel ko methods
}

export async function add(newCar) {
  //cars.push(car); //yesari hudaina , since DB ma add garnu paryo not dummy array data so we need to use carModel ko methods
  // return car.insert(newCar);

  //return car.create(newCar); //instead of this see the code below to debug
  const result = await car.create(newCar);
  console.log("Inserted:", result);
  return result;
}

//Make update and delete as well 

//Update
export async function update(id, updatedCar) {
  return car.findByIdAndUpdate(id, updatedCar, {
    new: true,
    runValidators: true,
  })
}