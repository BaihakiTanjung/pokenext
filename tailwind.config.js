/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#5C5E7D",
          secondary: "#aa2326",
          accent: "#d2ef40",
          neutral: "#222639",
          "base-100": "#F5FBFB",
          info: "#A0D9EE",
          success: "#1DAF9C",
          warning: "#EDB51D",
          error: "#DF2040",
        },
      },
    ],
  },
};
