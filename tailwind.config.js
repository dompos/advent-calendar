/** @type {import('tailwindcss').Config} */
import { withAnimations } from 'animated-tailwindcss';

export default withAnimations({
  // your (existing) Tailwind CSS config here
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cinzel': ['Cinzel', 'sans-serif'],
        'candy':  ['Emilys Candy', 'sans-serif'],
      },
      colors: {
        bagPink: '#fe5d7e'
      },
    },
  },
  plugins: [],
  
})