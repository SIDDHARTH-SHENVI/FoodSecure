import React, { useState } from "react";
import axios from "axios";

const Forms = () => {
  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
    hotelName: "",
    hotelAddress: "",
    description: "", // Add description to the initial state
    contact: "",
    expiryDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4001/food", formData);
      console.log("Data saved:", response.data);
      alert("Food donation submitted successfully!");
      setFormData({
        name: "",
        quantity: "",
        hotelName: "",
        hotelAddress: "",
        description: "", // Reset description field
        contact: "",
        expiryDate: "",
      });
    } catch (error) {
      console.error("Error saving data:", error);
      alert("Error submitting food donation.");
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-4">Post Your Food Donation</h2>
      <hr className="mb-6" />

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="input input-bordered flex items-center gap-2 mb-2">
            Food Item Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="grow"
              placeholder="Enter food item name"
              required
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 mb-2">
            Quantity
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="grow"
              placeholder="Enter quantity"
              required
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 mb-2">
            Hotel Name
            <input
              type="text"
              name="hotelName"
              value={formData.hotelName}
              onChange={handleChange}
              className="grow"
              placeholder="Enter hotel name"
              required
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 mb-2">
            Address
            <input
              type="text"
              name="hotelAddress"
              value={formData.hotelAddress}
              onChange={handleChange}
              className="grow"
              placeholder="Enter address"
              required
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 mb-2">
            Description
            <input
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="grow"
              placeholder="Enter description"
              required
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 mb-2">
            Contact Phone Number
            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="grow"
              placeholder="Enter contact phone number"
              required
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 mb-2">
            Expiry Date
            <input
              type="date"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              className="grow"
              required
            />
          </label>
        </div>

        <div className="flex items-center justify-center">
          <button className="btn btn-success text-white text-base font-medium">
            Submit Donations
          </button>
        </div>
      </form>
    </div>
  );
};

export default Forms;
