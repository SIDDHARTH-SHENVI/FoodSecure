import React from 'react';

const VolunteerSection = () => {
  return (
    <div className="container mt-10 mx-auto py-8 px-4">
      {/* Introduction */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Volunteer with Us</h2>
        <p className="text-lg mb-6">
          Volunteering with us is a great way to make a positive impact in your community. 
          By donating your time and skills, you help us achieve our mission of reducing food insecurity. 
          Our volunteers are the backbone of our organization, and we truly value the dedication and energy they bring. 
          Whether you can spare a few hours a week or make a more regular commitment, every bit helps in making a significant difference.
        </p>
        <p className="text-lg mb-6">
          As a volunteer, you’ll have the opportunity to participate in various activities, 
          including food sorting and packaging, distribution, community outreach, and educational workshops. 
          You’ll gain valuable experience, meet like-minded individuals, and be a part of a passionate community dedicated to making a change.
        </p>
        <p className="text-lg">
          Join us today and become a part of a dedicated team making a real difference.
        </p>
      </section>

      {/* Registration Form */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Sign Up to Volunteer</h3>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <label className="input input-bordered flex items-center gap-2">
              Full Name
              <input type="text" className="grow" placeholder="Enter your full name" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Email Address
              <input type="email" className="grow" placeholder="Enter your email address" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Phone Number
              <input type="tel" className="grow" placeholder="Enter your phone number" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Areas of Interest
              <input type="text" className="grow" placeholder="Enter your areas of interest" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Availability Start Date
              <input type="date" className="grow" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Availability End Date
              <input type="date" className="grow" />
            </label>
          </div>
          <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">Submit</button>
        </form>
      </section>

      {/* FAQs */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h3>
        <div className="space-y-4">
          {/* Example FAQ */}
          <div>
            <h4 className="font-semibold">What is the time commitment for volunteering?</h4>
            <p>We offer flexible volunteer opportunities ranging from a few hours a week to more regular commitments. You can choose what works best for you.</p>
          </div>
          {/* Repeat similar blocks for other FAQs */}
        </div>
      </section>
    </div>
  );
};

export default VolunteerSection;
