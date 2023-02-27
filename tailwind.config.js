/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",

    // Plugin
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#1C1C1C",
        secondary: "#232323",
        "button-green": "#2B825B",
        "button-green-hover": "#2B826C",
      },
      borderColor: {
        primary: "#1C1C1C",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
