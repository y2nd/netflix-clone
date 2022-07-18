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
        }
      },
    },
    
  },
  plugins: [],
}
