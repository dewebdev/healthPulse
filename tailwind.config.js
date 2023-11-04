/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Playpensans: ["Playpen Sans", "cursive"],
        Kenia: ["Kenia", "sans-serif"],
        Pacifico: ["Pacifico", "cursive"],
        ShadowsIntoLight: ["Shadows Into Light", "cursive"],
      },
    },
  },
  plugins: [],
};
