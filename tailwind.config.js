/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ox: "#1f0408",
        wine: "#4a0a13",
        car: "#8f1020",
        rose: "#e9c6bf",
        ivory: "#f7ece8",
        ink: "#2a0a0f",
      },
      fontFamily: {
        gloock: ['Gloock', 'Didot', 'serif'],
        familjen: ['Familjen Grotesk', 'Helvetica Neue', 'sans-serif'],
        pinyon: ['Pinyon Script', 'cursive'],
      },
      maxWidth: {
        col: "25rem",
      },
    },
  },
  plugins: [],
}

