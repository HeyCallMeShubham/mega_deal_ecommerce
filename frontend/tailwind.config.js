/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    screens: {

      xsm: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xl: "1536px"

    },

    extend: {

      colors: {

        primaryBg: "#f68b1f",
        secondaryBg: "#36526b",
        textHoverPrimary: "#f68b1f",
        textHoverSecondary: "#36526b",

      }

    },

  },


  plugins: [],

}