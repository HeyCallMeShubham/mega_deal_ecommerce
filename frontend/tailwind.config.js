import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],


  

  theme: {

    screens: {

      xsm: "200px",
      sm: "440px",
      md: "718px",
      lg: "924px",
      xl: "1380px",
      xxl: "1536px"


    },

    extend: {

      colors: {

        primaryBg: "#f68b1f",
        secondaryBg: "#36526b",
        textHoverPrimary: "#f68b1f",
        textHoverSecondary: "#36526b",
        textPrimary: "#f68b1f",
        textSecondary: "#36526b",

      },

  
      keyframes: {
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'slide-in-left': 'slide-in-left 0.5s ease-out',
      },

    },

  },


  plugins: [],

}