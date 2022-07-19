/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        GREY: {
          LIGHT: "#e5e5e5",
          DARK: "#b3b3b3"
        },
        BLACK: {
          PRIMARY :"#141414",
          GRADIENT: "#010511"
        },
        WHITE: {
          PRIMARY: "#e5e5e5",
        }
      },
      backgroundImage: {
        'gradient-to-b':
          'linear-gradient(to bottom,rgba(20,20,20,0) 0,rgba(20,20,20,.15) 15%,rgba(20,20,20,.35) 29%,rgba(20,20,20,.58) 44%,#141414 68%,#141414 100%);',
      },
    },
    
  },
  plugins: [require("tailwindcss-textshadow"), require("tailwind-scrollbar-hide")],
}
