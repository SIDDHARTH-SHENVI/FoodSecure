import mongoose from "mongoose";

const foodSchema=mongoose.Schema(
    {
        
        "name": "string",
        "quantity": "string",
        "hotelName": "string",
        "hotelAddress": "string",
        "description": "string",
        "contact": "string",
        "expiryDate": "string"
      }      
)
const Food=mongoose.model("Food",foodSchema);

export default Food;