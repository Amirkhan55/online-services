/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {fontFamily: {
      copperplate: ['Copperplate', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      quicksand: ['Quicksand', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
      robotoCondensed: ['Roboto Condensed', 'sans-serif'],
      robotoMono: ['Roboto Mono', 'sans-serif'],
      robotoSlab: ['Roboto Slab', 'sans-serif'],
      raleway: ['Raleway', 'sans-serif'],
      rubik: ['Rubik', 'sans-serif'],
      ubuntu: ['Ubuntu', 'sans-serif'],
      workSans: ['Work Sans', 'sans-serif'],
      josefinSans: ['Josefin Sans', 'sans-serif'],
      cambria: ['Cambria', 'sans-serif'],
    },},
  },
  plugins: [],
}

