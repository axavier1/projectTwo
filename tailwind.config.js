/** @type {import('tailwindcss').Config} */
module.exports = {
<<<<<<< HEAD
  content: ["./views/layouts/*.handlebars","./views/*.handlebars"],
=======
  content: ["./views/layouts/*.handlebars", "./node_modules/tw-elements/dist/js/**/*.js"],
>>>>>>> main

  theme: {
    extend: {},
  },
<<<<<<< HEAD
  plugins: [require('@tailwindcss/forms'),
],
=======
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
>>>>>>> main
}

