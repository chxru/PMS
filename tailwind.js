const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      colors: {
        foreground: "#FFFFFF",
        background: "#E9ECF3",
        primary: { ...colors.blue },
      },
      spacing: {
        "72": "18rem",
        "84": "21rem",
        "96": "24rem",
      },
    },
  },
  variants: {},
  plugins: [],
  purge: false, // purging done by manually
};
