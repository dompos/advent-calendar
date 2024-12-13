/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cinzel': ['Cinzel', 'sans-serif'],
        'candy':  ['Emilys Candy', 'sans-serif'],
      }
    },
  },
  plugins: [],
}