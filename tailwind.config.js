/** @format */

module.exports = {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "kh-insider": "#fab314",
        lagacy: "#897b61",
        cam: "#c70003",
        financial: "#233259",
        secondary: "#2A6B6B",
      },
      fontSize: {
        "2xs": "0.5rem",
        xxl: "2rem",
        xxxl: "2.5rem",
      },
      width: {
        "1/3": "33.3333%",
      },
    },
  },
  plugins: [],
};
