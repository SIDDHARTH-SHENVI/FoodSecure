import Food from "../model/food.model.js";

export const createFood = async (req, res) => {
    const {
      name,
      quantity,
      hotelName,
      hotelAddress,
      description,
      contact,
      expiryDate
    } = req.body;
  
    try {
      // Create a new Food document using the Food model
      const newFood = new Food({
        name,
        quantity,
        hotelName,
        hotelAddress,
        description,
        contact,
        expiryDate
      });
  
      // Save the new food donation to the database
      await newFood.save();
  
      res.status(201).json(newFood); // Respond with the saved food donation
    } catch (error) {
      console.error("Error creating food donation:", error);
      res.status(500).json({ error: "Failed to create food donation" });
    }
  };

export const getFood=async(req,res)=>{
    try{
        const food=await Food.find();
        res.status(200).json(food);
    } catch(error){
        console.log("error: ",error);
        res.status(500).json(error);

    }
};  