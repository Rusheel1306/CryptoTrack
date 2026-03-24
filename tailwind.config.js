/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // You can add custom colors or fonts here later
      colors: {
        brand: '#60a5fa', // Example: a nice blue for your CryptoTrack logo
      },
    },
  },
  plugins: [],
}