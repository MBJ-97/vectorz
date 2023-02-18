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
        custom: "0px 8px 24px rgba(112, 144, 176, 0.15);",
      },
    },
  },
  plugins: [],
};
