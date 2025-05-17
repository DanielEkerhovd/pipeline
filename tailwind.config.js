/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
      colors: {
        background: "#F5F7FA",
        primary: "#FFFFFF",
        highlight: "#3F51B5",
      },
      screens: {
      },
    },
  },
  plugins: [],
};