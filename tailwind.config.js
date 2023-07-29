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
        // background: "#12161E",
        background: "#D7DDE7",
        gradl: "#0e1c26",
        gradm: "#2a454b",
        gradr: "#294861",
      },
      dropShadow: {
        custom: "5px 5px 0 rgba(18, 22, 30, 0.25)",
      },
    },
  },
  plugins: [],
};
