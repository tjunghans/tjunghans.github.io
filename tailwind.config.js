/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    '_includes/**/*.html',
    '_layouts/**/*.html',
    '_posts/**/*.html',
    '**/*.html',
    '**/*.html',
    '*.markdown',
    'index.html'
  ],
  theme: {
    colors: {
      primary: "#4ade80",
      secondary: "#b5217f",
      black: colors.black,
      white: colors.white,
      slate: colors.slate,
      gray: colors.gray,
    },
    extend: {

    },
  },
  plugins: [],
}