/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#1F1F1E",
        darkBlue: "#0492C2",
        darkWhite: "rgba(255, 255, 255, 0.5);",
        white1: "#C9C9C9",
      },
    },
  },
  plugins: [],
};
