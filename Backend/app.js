// //const express = requires('express'); //syntax confusing, old style b4 ecma script

// import express from "express"; //since this express is the new installed package so we have to import it to our main server file 
// import cars from "./data/Cars.js";

// const app = express(); //aftering importing express we need to call it like we had done to useState and useEffect 


// //Two applications distinguish garna different ports 

// const PORT = 4000; //Node JS default port (Frontend app: 5173 in localhost diff port, backend pani local host mai huncha but in different port)

// //--------------------------------------
// //Write in between this 

// app.get("/", (req, res) => {
//   res.send("Hello from the backend!");
// });

// //Get Request
// app.get("/cars",(req,res)=>{ //Creating an API , get garda data line matrai thiyo so response ma aayeko thiyo
//     console.log("Cars routes hit");
//     return res.json(cars)
// }); //don't write getCar it violates the principles of Rest API , rather write tyo resource in plurar form , yauta matrai chahenda cars:ID or something


// //Post Request
// app.post("/cars",(req,res)=>{ //req object -> client ko form bata data aayerako hola which we need to post in backend so we need to use req as well 

//     const car = req.body //form req bata j request pathaye rako cha 
//     cars.push(car)

//     //user lai k pathauney tyo return ma lekhney
//     //return res.json({"message": "Car added successfully!"}) //.status ley fail huda 400 ra success huda 200 pathaucha
//     return res.status(201).json({"message": "Car added successfully!"}) //.status ley fail huda 400 ra success huda 200 pathaucha
// });
// //3 methods to send this new car: 
// //1. Terminal bata CURL garney 
// //2. Forntend sangha connect garauney and form bata send 
// //3. Use Postman (to send such requests)


// //-----------------------------------------

// //Server has been setup 
// app.listen(PORT, () =>{
//     console.log(`Our servers is running on port ${PORT}.`);
// } ); //app.listen(PORT, arrow func ma changes to be made)

// //To run this: node app.js in terminal 
// //But, this doesn't work live we need to stop and restart the server again -> so for that nodemon is the solution (when code change isn't listening)
// //aba post garesakesi, feri add bhayo ki bhayena bhanera hernu ko lagi we can't see in file the changes so we need to see in post man as well


//Week2: Model, Controller and Routess
import express from "express";
const app = express(); //app.use() = app.use() tells Express: "For every incoming request, run this middleware."

app.use(express.json());//Without this middleware, req.body will be undefined when you send JSON from Postman. --->  //"Before any routes run, if the request contains JSON, read it and convert it into a JavaScript object." //wrote in app.js cause package.json probably contains something like: "scripts": "dev": "nodemon app.js" ... Node begins executing app.js from top to bottom.

//Using CORS
app.use(cors());
import carRoutes from "./routes/carRoutes.js";

app.use("/api", carRoutes); //"If the URL starts with /api, let carRoutes handle it." --> //Use this middleware or router whenever a request matches this path. If a request starts with /api > Pass it to the carRoutes router.
// Now these URLs become: Get /api/cars and Post /api/cars.

//Registering new API for bookings
import bookingRoutes from "./routes/bookingRoutes.js";
app.use("/api", bookingRoutes);


// Starting server on port 4000
//const PORT = 4000; //Let's put this in .env for checking
import dotenv from "dotenv";
dotenv.config(); //Searches where the dotenv file is inside the project

const PORT = process.env.PORT || 4001; //process = file sangha deal garney kura, using pipe operator || this is the fallback if doesn't exits in env file


app.listen(PORT, () => {
  console.log(`Servers is running on port ${PORT}`);
});