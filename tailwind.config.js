/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/layouts/*.handlebars", "./node_modules/tw-elements/dist/js/**/*.js"],

  theme: {
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
}

