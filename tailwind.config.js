/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        pri_green: "#4C8073",
        sec_green: "#BFD1D2",
        text_green: "#263238",
        text_disable: "#AAAAAA",
        hover_green: "#3D685D",
      },
    },
  },
  plugins: [
    require("@shrutibalasa/tailwind-grid-auto-fit"),
    require("flowbite/plugin"),
  ],
};
