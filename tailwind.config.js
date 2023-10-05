/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#12161E",
        mWhite: "#D7DDE7",
      },
      dropShadow: {
        custom: "0 0 8px rgba(215, 221, 231, 0.50)",
      },
    },
  },
  plugins: [],
};
