import * as CarModel from "../models/carModel.js";

//GET
export function getCars(req, res) {
  const cars = CarModel.getAll();
  return res.status(200).json(cars);
}

//POST
export function addCar(req, res) {
  const car = req.body;

  CarModel.add(car);

  return res.status(201).json({
    message: "Car added successfully",
    data: car,
  });
}