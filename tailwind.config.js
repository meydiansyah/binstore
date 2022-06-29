module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: "#0070f3",
          100: "#0070f30d",
        },
      },
    },
  },
  plugins: [
    // eslint-disable-next-line global-require
    require("@tailwindcss/line-clamp"),
  ],
};
