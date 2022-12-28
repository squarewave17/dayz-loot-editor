/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue,js}"],
  theme: {
    fontSize: {
      sm: "0.707rem",
      base: "1rem",
      xl: "1.414rem",
      "2xl": "1.999rem",
      "3xl": "2.827rem",
      "4xl": "3.998rem",
    },
  },
  plugins: [require("daisyui")],
};
