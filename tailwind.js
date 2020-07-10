const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      colors: {
        foreground: "#FFFFFF",
        background: "#E9ECF3",
        primary: { ...colors.blue },
      },
    },
  },
  variants: {},
  plugins: [],
  purge: false, // purging done by manually
};
