/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,vue,ts}",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    colors: {
      "bg-grey": "#E8E8E8",
      "bg-light-grey": "#F5F5F5",
      "dark-grey": "#6B6B6B",
      "border-light": "#CCCCCC",
      border: "#DBDBDB",
      accent: "#337566",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["15px", "24px"],
      base: ["17px", "28px"],
      lg: ["18px", "22px"],
      xl: ["20px", "24px"],
      "2xl": ["24px", "28px"],
      "3xl": ["28px", "33px"],
      "4xl": ["36px", "43px"],
      "5xl": ["40px", "48px"],
      "6xl": ["48px", "68px"],
      "7xl": ["70px", "84px"],
      "8xl": ["98px", "98px"],
    },
    extend: {},
  },
  plugins: [],
};
