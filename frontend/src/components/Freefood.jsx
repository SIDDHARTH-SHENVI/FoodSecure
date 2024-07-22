import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function Freefood() {
  const [food, setFood] = useState([]);
  
  useEffect(() => {
    const getFood = async () => {
      try {
        const res = await axios.get("http://localhost:4001/food");
        console.log(res.data);
        setFood(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getFood();
  }, []);
  
  const handleSubmit = async (item) => {
    try {
      await axios.delete(`http://localhost:4001/food/${item._id}`);
      setFood(food.filter((f) => f._id !== item._id));
      alert(`You have submitted a request for ${item.name}`);
    } catch (error) {
      console.error("Error deleting food donation:", error);
      alert("Error submitting food donation request.");
    }
  };
  
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-20 items-center justify-center text-center">
          <h1 className="font-semibold text-xl">
            Available Food Items for Donation
          </h1>
          <p className="mt-6">
            Below is a list of surplus food items available for donation from
            various local hotels and restaurants. Each card provides detailed
            information about the food item, including the quantity available,
            the provider's contact information, and the expiry date.
          </p>
        </div>
      </div>
      <div>
        <Slider {...settings}>
          {food.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">{item.name}</h3>
              <p className="text-gray-700 mb-2">
                <strong>Quantity:</strong> {item.quantity}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Hotel:</strong> {item.hotelName}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Address:</strong> {item.hotelAddress}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Description:</strong> {item.description}
              </p>
      
              <p className="text-gray-700 mb-2">
                <strong>Contact:</strong> {item.contact}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Expiry Date:</strong> {item.expiryDate}
              </p>
              <button
                onClick={() => handleSubmit(item)}
                className="mt-4 w-full bg-green-500 text-white p-2 rounded"
              >
                Submit Request
              </button>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Freefood;
