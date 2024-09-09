/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    screens: {
      sm: { min: "360px", max: "460px" },
      md: { min: "460px", max: "1150px" },
      lg: { min: "1150px", max: "2000px" },
    },
    extend: {
      colors: {
        teal: {
          500: '#38b2ac',
          600: '#319795',
        },
        beige: {
          DEFAULT: '#f5f5dc',
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