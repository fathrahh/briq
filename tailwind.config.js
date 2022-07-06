/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1080px",
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        primary: "#953E46",
        secondary: "#F4E3CF",
        cream: "#E79B9D",
      },
    },
  },
  plugins: [{}],
};
