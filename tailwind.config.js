/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "2rem",
      xl: "3rem",
    },
    extend: {
      backgroundImage: {
        intro: "url('/images/intro.jpg')",
        objective: "url('/images/objectives.jpg')",
        finalpage: "url('/images/finalpage.jpg')",
        kc: "url('/images/kc.jpg')",
      },
    },
  },
  plugins: [],
};
