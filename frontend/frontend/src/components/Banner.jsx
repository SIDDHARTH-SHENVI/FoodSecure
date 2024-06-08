import React from 'react'
import banner from '../../public/banner.png'
function Banner() {
  return (<>
    <div className=' max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
      <div className='w-full md:w-1/2 mt-12 md:mt-32'>
        <div className='space-y-12'>
        <h1 className='text-4xl font-bold'>End Hunger! Reduce Waste! Empower Communities!</h1>
        <p className='text-xl '>FoodSecure connects surplus food from suppliers directly to those in need, ensuring that no food goes to waste. By joining us, you can help combat hunger, support sustainable practices, and strengthen community bonds. Together, we can create a healthier, more resilient world</p>

        
        <label className="input input-bordered flex items-center gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
  <input type="text" className="grow" placeholder="Email" />
</label>
</div>
<button className="btn mt-6 btn-secondary">Get Started</button>
      </div>

      <div className='w-full md:w-1/2'>
        <img src={banner} className='w-92 h-92' alt=''/>
      </div>
      
    </div>
    
    <div className='space-y-6 p-20'>
    <h2  className='text-xl'>About Us</h2>
    <div>
        <h3 className='text-xl'>Mission</h3>
        <p>
            Our mission at FoodSecure is to bridge the gap between food surplus and food scarcity. We aim to reduce food waste and enhance food security by efficiently redistributing surplus food from suppliers such as farms, restaurants, and grocery stores to those in need, including food banks, shelters, and individuals. We believe that by leveraging technology and community collaboration, we can create a sustainable food system that ensures everyone has access to nutritious food.
        </p>
        <h3 className='text-xl'>Vision</h3>
        <p>
            We envision a world where no one goes hungry and where food resources are utilized efficiently and sustainably. Our goal is to foster a community where surplus food is not wasted but shared, supporting both the environment and those in need. Through education and innovation, we strive to promote sustainable food practices and create lasting solutions to food insecurity.
        </p>
    </div>
    
    <div className='space-y-6'>
      <h2 className='text-2xl'>Resource Section</h2>
    <h3  className='text-xl'>How to Reduce Food Waste in Your Home</h3>
    <p>Food waste is a significant issue that affects both the environment and our wallets. By adopting a few simple habits and strategies, you can reduce food waste in your home and contribute to a more sustainable world. Here are some practical tips to help you get started:</p>
    
    <h3 className='text-xl'>1. Plan Your Meals</h3>
    <ul>
        <li>Make a Shopping List: Based on your meal plan, make a detailed shopping list and stick to it when you go to the store.</li>
        <li>Consider Portions: Plan for appropriate portion sizes to prevent cooking too much food.</li>
        <li>Create a Weekly Meal Plan: Outline what you’ll be eating for each meal throughout the week. This helps you buy only what you need and avoid impulse purchases.</li>
    </ul>
    
    <h3  className='text-xl'>2. Store Food Properly</h3>
    <ul>
        <li>Use Airtight Containers: Store leftovers and perishable items in airtight containers to keep them fresh longer.</li>
        <li>Organize Your Fridge and Pantry: Keep older items at the front and new items at the back to ensure you use up what you have before it goes bad.</li>
        <li>Know Your Storage Areas: Understand which foods should be stored in the fridge, freezer, or pantry to maintain their freshness.</li>
    </ul>
    
    <h3  className='text-xl'>3. Get Creative with Leftovers</h3>
    <ul>
        <li>Repurpose Leftovers: Use leftovers in new recipes. For example, roast vegetables can be used in a salad, and cooked meats can be added to soups or sandwiches.</li>
        <li>Make Soup or Stew: Leftover vegetables, meats, and grains can be combined into a delicious soup or stew.</li>
        <li>Freeze for Later: If you have a lot of leftovers, freeze them in portions for easy meals later on.</li>
    </ul>
    
    <h3  className='text-xl'>4. Understand Expiration Dates</h3>
    <ul>
        <li>“Best Before” vs. “Use By”: “Best before” dates indicate quality, not safety. Food is often still safe to eat after this date, but it might not be at its best. “Use by” dates are about safety, and food should not be consumed past this date.</li>
        <li>Trust Your Senses: Use your sense of smell, sight, and taste to judge whether food is still good to eat. If it looks, smells, and tastes fine, it’s probably safe to consume.</li>
    </ul>
    
    <h3 className='text-xl'>5. Compost Food Scraps</h3>
    <ul>
        <li>Start a Compost Bin: Composting organic waste like fruit and vegetable peels, coffee grounds, and eggshells reduces landfill waste and produces nutrient-rich soil for your garden.</li>
        <li>Check Local Options: If you can’t compost at home, check if your community has a composting program or drop-off sites.</li>
    </ul>

    <h2 className='text-2xl'>Top 10 Nutritious Recipes on a Budget</h2>
    <p>Eating healthy doesn't have to be expensive. With a little creativity and smart shopping, you can prepare delicious, nutritious meals without breaking the bank. Here are ten budget-friendly recipes that are easy to make and packed with nutrients:</p>

    <h3  className='text-xl'>1. Vegetable Stir-Fry</h3>
    <ul>
        <li>Ingredients: Mixed vegetables (carrots, bell peppers, broccoli, snap peas), soy sauce, garlic, ginger, olive oil, brown rice.</li>
        <li>Instructions: Sauté garlic and ginger in olive oil, add mixed vegetables and stir-fry until tender. Add soy sauce to taste. Serve over brown rice.</li>
        <li>Benefits: Rich in vitamins, minerals, and fiber.</li>
    </ul>
    
    <h3  className='text-xl'>2. Black Bean Tacos</h3>
    <ul>
        <li>Ingredients: Canned black beans, corn tortillas, lettuce, tomato, avocado, salsa, lime.</li>
        <li>Instructions: Warm the tortillas, fill with black beans, and top with chopped lettuce, tomato, avocado, and salsa. Squeeze lime over the top.</li>
        <li>Benefits: High in protein, fiber, and healthy fats.</li>
    </ul>
    
    <h3  className='text-xl'>3. Lentil Soup</h3>
    <ul>
        <li>Ingredients: Dry lentils, carrots, celery, onion, garlic, vegetable broth, canned tomatoes, spices (cumin, paprika, bay leaf).</li>
        <li>Instructions: Sauté onions, garlic, carrots, and celery. Add lentils, broth, tomatoes, and spices. Simmer until lentils are tender.</li>
        <li>Benefits: Packed with protein, fiber, and essential nutrients.</li>
    </ul>
    
    <h3  className='text-xl'>4. Oatmeal with Fruit</h3>
    <ul>
        <li>Ingredients: Rolled oats, milk or water, honey, fresh or dried fruit (bananas, berries, raisins), nuts or seeds.</li>
        <li>Instructions: Cook oats in milk or water. Top with honey, fruit, and nuts or seeds.</li>
        <li>Benefits: High in fiber, vitamins, and minerals.</li>
    </ul>
    
    <h3  className='text-xl'>5. Chickpea Salad</h3>
    <ul>
        <li>Ingredients: Canned chickpeas, cucumber, tomato, red onion, olive oil, lemon juice, parsley, salt, and pepper.</li>
        <li>Instructions: Rinse and drain chickpeas. Combine with chopped vegetables, drizzle with olive oil and lemon juice, and season with salt and pepper.</li>
        <li>Benefits: Rich in protein, fiber, and antioxidants.</li>
    </ul>
</div>

    
      </div>
    </>)
}

export default Banner
