/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-purple": "#36384D",
        "light-blue": "#24263F",
      },
      fontFamily: {
        roboto: ["Roboto"],
      },
      width: {
        934: "934px",
      },
      height: {
        642: "642px",
      },
    },
  },
  plugins: [],
}
