/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/**/*.{html,js,css,htmx,jsx,tsx}",
    "./public/**/*.{html,js,css,htmx,jsx,tsx}",
    "./css/**/*.{html,js,css,htmx,jsx,tsx}",
  ],
  theme: {
    extend: {


      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },

    },
  }, 
  
  plugins: [

  ],
};