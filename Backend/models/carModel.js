import cars from "../data/Cars.js";

export function getAll() {
  return cars;
}

export function add(car) {
  cars.push(car);
}