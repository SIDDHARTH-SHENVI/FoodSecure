import React from 'react'
import banner from '../../public/banner.png'
function Banner() {
  return (<>
    <div className=' max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row '>
      <div className='w-full md:w-1/2 mt-12 md:mt-32'>
        <div className='space-y-12'>
        <h1 className='text-4xl font-bold'>End Hunger! Reduce Waste! Empower Communities!</h1>
        <p className='text-xl '>A paragraph is a unit of writing that deals with a particular topic or idea12345. A paragraph usually consists of at least three to five sentences that support the main idea of the paragraph45. The first sentence of a paragraph is often the topic sentence that introduces the central theme5. Paragraphs are a conventional way of organizing prose and helping writers and readers understand the textFoodSecure connects surplus food from suppliers directly to those in need, ensuring that no food goes to waste. By joining us, you can help combat hunger, support sustainable practices, and strengthen community bonds. Together, we can create a healthier, more resilient world</p>

        
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
    </>)
}

export default Banner
