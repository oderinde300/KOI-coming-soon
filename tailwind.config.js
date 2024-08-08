/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-bg": "url('/public/images/bg.svg')",
        "custom-gradient": "linear-gradient(90deg, #AD45F7 0%, #219DF9 100%)", // Replace this with your exact gradient
      },
      fontSize: {
        "app-sm": [
          "14px",
          {
            lineHeight: "17.07px",
          },
        ],
        "app-base": [
          "16px",
          {
            lineHeight: "19.5px",
          },
        ],
        "app-5xl": [
          "54px",
          {
            lineHeight: "69px",
          },
        ],
        "app-6xl": [
          "64px",
          {
            lineHeight: "78px",
          },
        ],
        "app-10xl": [
          "96px",
          {
            lineHeight: "123.65px",
          },
        ],
      },
    },
  },
  plugins: [],
};
