import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:4000/api',
});

//see in controller all the functions 

export function getCars(){
    return api.get('/cars'); //This throws error and data as well, so no need to manually check
}

export function addNewCar(){
    return api.post('/cars');
}

export function updateCar(carId,car){
    return api.put(`/cars/:${carId}`)
}

export function deleteCar(carID){
    return api.delete(`/cars/:${carID}`)
}


export default api;

