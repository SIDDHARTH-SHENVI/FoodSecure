import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors"
import bodyParser from 'body-parser';
import foodRoute from "./route/food.route.js";
import userRoute from "./route/user.route.js";


import volunteerRoutes from "./route/volunteer.route.js"
const app = express()
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use("/user",userRoute);
dotenv.config();
const PORT=process.env.PORT || 4000;
const URI=process.env.MongodbURI


//connect to mongodb
try{
    mongoose.connect(URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });
    console.log("conecting to mongodb");
}catch(error){
    console.log("Error: ",error);
}

//defining routes
app.use("/food",foodRoute)
app.use('/volunteer', volunteerRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})