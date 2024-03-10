/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fragment: ["Fragment", "sans-serif"],
        chivo: ["Chivo", "sans-serif"],
        major: ["Major Mono Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};
