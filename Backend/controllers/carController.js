import * as CarModel from "../models/carModel.js";

//GET
export async function getCars(req, res) {
  const cars = await CarModel.getAll();
  return res.status(200).json(cars);
}

//POST
export async function addCar(req, res) {
  const car = req.body; //Nothing is checked in here meaning it's accepting gibberish data as well without proper structure so added a middleware in routes (req,yeha bich ma validators, response)

  await CarModel.add(car);

  return res.status(201).json({
    message: "Car added successfully",
    data: car,
  });
}

//update car controller too banau 
export async function update(id, updatedCar) {
  const updateId = new ObjectId(id); //For id, pahila dummy data ma string was ok, but now we need to convert it to object id haita
  
  return car.findByIdAndUpdate(updateId, updatedCar, {
    new: true,
    runValidators: true,
  })
}

//Delete car ko lagi pani banau 