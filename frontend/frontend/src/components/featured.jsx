import React from 'react';
import featuredHotel from "../../public/featuredhotel.json"; // Ensure the path to the JSON file is correct

function FeaturedHotel() {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6">Featured Hotel/Restaurant of the Month</h2>
      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <img src={featuredHotel.image} alt={featuredHotel.name} className="rounded-lg" />
        </div>
        <div className="md:w-2/3 md:ml-6">
          <h3 className="text-2xl font-bold mb-4">{featuredHotel.name}</h3>
          <p className="text-gray-700 mb-4">{featuredHotel.story}</p>
          <blockquote className="text-gray-600 italic border-l-4 border-green-500 pl-4">{featuredHotel.quote}</blockquote>
        </div>
      </div>
    </div>
  );
}

export default FeaturedHotel;
