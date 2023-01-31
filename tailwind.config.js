/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customred: "hsl(1, 90%, 64%)",
        customblue: "hsl(219, 85%, 26%)",
        verylightgrayishblue: "hsl(210, 60%, 98%)",
        lightgrayishblue1: "hsl(211, 68%, 94%)",
        lightgrayishblue2: "hsl(205, 33%, 90%)",
        grayishblue: "hsl(219, 14%, 63%)",
        darkgrayishblue: "hsl(219, 12%, 42%)",
        verydarkblue: "hsl(224, 21%, 14%)",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
