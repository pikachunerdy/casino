/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Clash: "Clash Display",
        Inter: ['"Inter"', "sans-serif"],
      },
      colors: {
        dark: "#121212",
        dark1: "#363636",
        dark2: "#262626",
        dark3: "#191D23",
        dark4: "#667085",
        dark5: "#D2D2D3",
        blue1: "#0492C2",
        darkWhite: "rgba(255, 255, 255, 0.5);",
        white1: "#C9C9C9",
        white2: "#7d7d7d",
        black1: "#1F1F1E",
        blue1: "#0492C2",
        blue2: "#66BEED",
        blue3: "#1676F8",
        green1: "#00FF95",
        green2: "#77D681",
        green3: "#333B37",
        green4: "#34C759",
        green5: "#27AB88",
        purple: "#976AFF",
        pink: "#CC4D93",
        red1: "#D67D77",
        red2: "#FF3B30",
      },
    },
  },
  plugins: [],
};
