/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkYellow: "#211c07", // Adjust the hex code to your preferred dark yellow color
      },
    },
  },
  plugins: [],
};
