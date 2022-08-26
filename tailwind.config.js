/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      "gray-dark": "#f6f6f6",
      "gray-dark-2": "#f5f7fa",

      "body-clr": "#f0fbff",

      "primary-blue": "#00baf2",
      "secondary-blue": "#0f4a8a",
    },
    extend: {
      fontFamily: {
        sans: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
