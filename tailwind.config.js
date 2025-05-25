/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        text: "2px 2px 4px rgba(0, 0, 0, 0.3)",
      },
      fontFamily: {
        copperplate: ["Copperplate", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        robotoCondensed: ["Roboto Condensed", "sans-serif"],
        robotoMono: ["Roboto Mono", "sans-serif"],
        robotoSlab: ["Roboto Slab", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
        workSans: ["Work Sans", "sans-serif"],
        josefinSans: ["Josefin Sans", "sans-serif"],
        cambria: ["Cambria", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        googleProductSans: ["GoogleProductSans, sans-serif"],
      },
    },
  },
  plugins: [],
};
