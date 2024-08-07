import React, { useState } from "react";
import axios from "axios";

const VolunteerSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    interests: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4001/volunteer",
        formData
      );
      console.log("Response:", response.data);
      alert("Volunteer form submitted successfully!");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        interests: "",
        startDate: "",
        endDate: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting volunteer form.");
    }
  };

  return (
    <div className="container mt-10 mx-auto py-8 px-4">
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Volunteer with Us</h2>
        <p className="text-lg mb-6">
          Volunteering with FoodSecure allows you to make a significant impact
          in your community by helping to bridge the gap between surplus food
          and those in need. By donating your time and skills, you support our
          mission to combat hunger and reduce food waste. Join us in fostering a
          sustainable, hunger-free future and experience the power of community
          action. Every effort counts, and together, we can achieve more.
        </p>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Sign Up to Volunteer</h3>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <label className="input input-bordered flex items-center gap-2">
              Full Name
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="grow"
                placeholder="Enter your full name"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Email Address
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="grow"
                placeholder="Enter your email address"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Phone Number
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="grow"
                placeholder="Enter your phone number"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Areas of Interest
              <input
                type="text"
                name="interests"
                value={formData.interests}
                onChange={handleChange}
                className="grow"
                placeholder="Enter your areas of interest"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Availability Start Date
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="grow"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Availability End Date
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="grow"
              />
            </label>
          </div>
          <div className="flex justify-center items-center h-full">
            <button
              type="submit"
              className=" w-30 btn btn-success text-white text-base font-medium"
            >
              Submit
            </button>
          </div>
        </form>
      </section>

      <section>
        <h3 className="text-2xl font-semibold mb-4">
          Frequently Asked Questions
        </h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold">
              What is the time commitment for volunteering?
            </h4>
            <p>
              We offer flexible volunteer opportunities ranging from a few hours
              a week to more regular commitments.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">How can I sign up to volunteer?</h4>
            <p>
              You can sign up to volunteer by visiting our volunteer
              opportunities page and filling out the sign-up form. Once
              submitted, our team will contact you with further details.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">
              What kind of training is provided for volunteers?
            </h4>
            <p>
              All volunteers receive an orientation and training session to
              ensure they are well-prepared for their roles. This includes
              safety guidelines, job-specific instructions, and ongoing support
              from our volunteer coordinators.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VolunteerSection;
