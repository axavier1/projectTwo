/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/layouts/*.handlebars","./views/*.handlebars","./node_modules/tw-elements/dist/js/**/*.js"],

  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),("tw-elements/dist/plugin.cjs")
],
}

