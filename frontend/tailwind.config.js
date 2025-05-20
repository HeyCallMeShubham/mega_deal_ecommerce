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

        primaryBg: "#7C1715",
        secondaryBg: "#5A2555",
   

      },

      fontFamily:{

      cursiveGreatVibes:["Great Vibes", "cursive"],
      allura:["Allura", "cursive"],
      ancizar: ['"Ancizar Serif"', 'serif']

      },

      fontStyle:{

        italic:"italic"

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