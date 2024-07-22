/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 5px 50px 16px rgba(0,0,0,0.1)',
        '4xl': '4px 8px 19px -3px rgba(0,0,0,0.27)'
      },

    },
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/line-clamp'),
  ],
}