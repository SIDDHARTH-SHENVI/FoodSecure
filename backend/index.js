import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors"
import foodRoute from "./route/food.route.js";
const app = express()
app.use(cors());
app.use(express.json());
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

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})