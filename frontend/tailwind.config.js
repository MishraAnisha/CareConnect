/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor: "#0067ff",
        yellowColor : "#FEB60D",
        purpleColor : "#9771ff",
        irisBlueColor : "#01B5C5",
        headingColor: "#181a1E",
        textcolor: "#4E545F",
        blue:'#3b82f6'
      },
      boxShadow :
      {
        panelShadow : "rgba(17,12,46,0.15) 0px 48px 100px 0px;",
        
      }
    },

  },
  plugins: [],
}

