/** @type {import('tailwindcss').Config} */
let defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
      "./src/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

