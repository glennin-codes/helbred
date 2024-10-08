/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          500: '#38b2ac',
          600: '#319795',
        },
        beige: {
          DEFAULT: '#e8d9c7',
        },
      },
      fontFamily: {
        default: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        gradientOne:
          "linear-gradient(0deg, rgba(0, 60, 50, 0.9) 0%, rgba(0, 120, 100, 0.8) 100%)",
        gradientTwo:
          "linear-gradient(360deg, rgba(0, 30, 25, 0.9) 0%, rgba(20, 50, 40, 0.8) 100%)",
        gradientThree: "linear-gradient(180deg, #004D40 0%, #00251A 100%)",
      },
    },
  },
  plugins: [],
};