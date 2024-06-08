import React from 'react'



const Forms = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-4">Post Your Food Donation</h2>
      <hr className="mb-6"/>
      
      <form>
        <div className="mb-6">
          <label className="input input-bordered flex items-center gap-2 mb-2">
            Food Item Name
            <input type="text" className="grow" placeholder="Enter food item name" />
          </label>
          <label className="input input-bordered flex items-center gap-2 mb-2">
            Quantity
            <input type="number" className="grow" placeholder="Enter quantity" />
          </label>
          <label className="input input-bordered flex items-center gap-2 mb-2">
            Hotel Name
            <input type="text" className="grow" placeholder="Enter hotel name" />
          </label>
          <label className="input input-bordered flex items-center gap-2 mb-2">
            Address
            <input type="text" className="grow" placeholder="Enter address" />
          </label>
          <label className="input input-bordered flex items-center gap-2 mb-2">
            Contact Phone Number
            <input type="tel" className="grow" placeholder="Enter contact phone number" />
          </label>
          <label className="input input-bordered flex items-center gap-2 mb-2">
            Expiry Date
            <input type="date" className="grow" />
          </label>
        </div>
        
        <div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Submit Donation</button>
        </div>
      </form>
    </div>
  );
};




export default Forms
