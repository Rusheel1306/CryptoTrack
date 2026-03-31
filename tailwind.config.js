/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: '#0f172a', // Deep slate blue background
        cardBlue: '#1e293b', // Lighter slate for cards
      }
    },
  },
  plugins: [],
}