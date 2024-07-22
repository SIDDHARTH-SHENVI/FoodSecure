import React from 'react'

const Guidelines = () => {
  return (
    <div className="container mt-10 mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Guidelines for Posting in the Donations Section</h2>
      <p className="text-lg mb-4">Welcome to the Donations Section! To ensure a smooth and effective donation process, please follow these guidelines when posting surplus food items:</p>
      <ul className="list-disc pl-6">
        <li className="mb-4">
          <strong>Item Details:</strong>
          <ul className="list-disc pl-6">
            <li> <strong>Name:</strong> Clearly specify the name of the food item.</li>
            <li> <strong>Quantity:</strong> Indicate the quantity available (e.g., number of servings, weight).</li>
            <li> <strong>Description:</strong> Provide a brief description of the item, including ingredients and any potential allergens.</li>
          </ul>
        </li>
        <li className="mb-4">
          <strong>Hotel Information:</strong>
          <ul className="list-disc pl-6">
            <li> <strong>Name:</strong> Include the name of your hotel or restaurant.</li>
            <li> <strong>Address:</strong> Provide the full address of your establishment.</li>
            <li> <strong>Contact Information:</strong> Add a contact person’s name, phone number, and email address for coordination.</li>
          </ul>
        </li>
        <li className="mb-4">
          <strong>Food Safety:</strong>
          <ul className="list-disc pl-6">
            <li>Ensure all donated food items are stored and handled according to food safety standards.</li>
            <li>Include the <strong>expiry date</strong> of the food item to ensure it is safe for consumption.</li>
          </ul>
        </li>
        <li className="mb-4">
          <strong>Packaging:</strong>
          <ul className="list-disc pl-6">
            <li>Properly package all food items to maintain hygiene and freshness.</li>
            <li>Use airtight containers or food-safe packaging materials.</li>
          </ul>
        </li>
        <li className="mb-4">
          <strong>Pick-up and Delivery:</strong>
          <ul className="list-disc pl-6">
            <li>Specify the preferred method of pick-up or delivery.</li>
            <li>Coordinate with recipients to arrange a convenient time for food collection.</li>
          </ul>
        </li>
        <li className="mb-4">
          <strong>Availability:</strong>
          <ul className="list-disc pl-6">
            <li>Update the status of your donation if it is no longer available.</li>
            <li>Promptly remove items from the list once they have been claimed.</li>
          </ul>
        </li>
        <li className="mb-4">
          <strong>Additional Notes:</strong>
          <ul className="list-disc pl-6">
            <li>Provide any other relevant information that might help recipients (e.g., storage instructions, special preparation notes).</li>
          </ul>
        </li>
      </ul>
      <p className="text-lg mt-6">By following these guidelines, you help ensure that your donations are effectively utilized and reach those in need promptly and safely. Thank you for your generosity and support in reducing food waste!</p>
    </div>
  );
};



export default Guidelines
