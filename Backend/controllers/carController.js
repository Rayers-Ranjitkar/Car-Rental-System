import * as CarModel from "../models/carModel.js";
import mongoose from "mongoose";

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

// PUT /api/cars/:id
export async function updateCar(req, res) {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid car id" });
  }

  const updateId = new mongoose.Types.ObjectId(id); // For id, pahila dummy data ma string was ok, but now we need to convert it to object id haita

  const updatedCar = await CarModel.update(updateId, req.body);

  if (!updatedCar) {
    return res.status(404).json({ message: "Car not found" });
  }

  return res.status(200).json({
    message: "Car updated successfully",
    data: updatedCar,
  });
}

// DELETE /api/cars/:id
export async function deleteCar(req, res) {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid car id" });
  }

  const deletedCar = await CarModel.remove(id);

  if (!deletedCar) {
    return res.status(404).json({ message: "Car not found" });
  }

  return res.status(200).json({
    message: "Car deleted successfully",
    data: deletedCar,
  });
}
