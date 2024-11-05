/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#FAFBFE",
        "secondary":"#686868",
        "tertiary":"#1089FF",
        "quaternary":"#E5E7EB",
        "Quinary":"#F3F2F6"
      },
      fontFamily: {
        SofadiOne: ["Sofadi One", "sans-serif"]
      },
    },
    screens: {
      'xl': {'max': '2023px'},
      'lg': {'max': '1200px'},
      'md': {'max': '900px'},
      'sm': {'max': '900px'},
    }
  },
  plugins: [],
}
