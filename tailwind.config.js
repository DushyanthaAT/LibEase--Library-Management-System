/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pri_green: "#4C8073",
        sec_green: "#BFD1D2",
        text_green: "#263238",
        text_disable: "#AAAAAA",
      },
    },
  },
  plugins: [require("@shrutibalasa/tailwind-grid-auto-fit")],
};
