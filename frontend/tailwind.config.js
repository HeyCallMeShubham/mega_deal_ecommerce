/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {

        primaryBg: "#f68b1f",
        secondaryBg: "#36526b",

      }
    },
  },
  plugins: [],
}