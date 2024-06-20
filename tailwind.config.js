/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
module.exports = {
  content: [
    "./src/components/Hero.jsx",
    "./src/components/Home.jsx",
    "./src/components/navbar.jsx",
    "./src/components/About.jsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
  ],
}