/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        My1: ["Roboto", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
      screens: {
        desktop: "2560px",
        wide: "640px",
      },
    },
  },
  plugins: [],
};
