const { Button } = require("react-native-web");

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      color: {
        primary: "#ffffff",
        secondary: "#203731",
      },
    },
  },
  plugins: [],
};
