import * as CarModel from "../models/carModel.js";

//GET
export function getCars(req, res) {
  const cars = CarModel.getAll();
  return res.status(200).json(cars);
}

//POST
export function addCar(req, res) {
  const car = req.body; //Nothing is checked in here meaning it's accepting gibberish data as well without proper structure so added a middleware in routes (req,yeha bich ma validators, response)

  CarModel.add(car);

  return res.status(201).json({
    message: "Car added successfully",
    data: car,
  });
}