/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#3B9271",
        footer: "#26644D",
        txtGray: "#8F8F8F",
        gray: "#606060",
        linkGray: "#595B66",
        breadGray: "#8B8E99",
        border: "#36364033",
        red: "#EF5042",
        black3: "#333333",
        light: "#F2F4F7",
        primary: "#3333CC",
        bgPrimary: "#3131c41a",
        bgPrimaryHover: "#3131c426",
      },
      boxShadow: {
        card: "0px 4px 4px 0px #00000040",
      },
    },
  },
  plugins: [],
};
