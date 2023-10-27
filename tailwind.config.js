/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "custom-dark-brown": "#978063",
        "custom-lighter-brown": "#d8b89b",
        "custom-lightest-brown": "#e9e0d2",
      },
      fontFamily: {
        avenir: ["Avenir", "cursive"],
        avenirLight: ["Avenir-Light", "sans-serif"],
        greatVibes: ["Great-Vibes", "sans-serif"],
      },
    },
  },

  plugins: [],
};
