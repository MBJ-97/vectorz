/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      orange: "#E63D26",
      black: "#000000",
      white: "#ffffff",
    },
    extend: {
      boxShadow: {
        custom: "0px 5px 10px rgba(65, 65, 67, 0.2);",
      },
    },
  },
  plugins: [],
};
