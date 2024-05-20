/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '_includes/**/*.html',
    '_layouts/**/*.html',
    '_posts/**/*.html',
    'core-values/**/*.html',
    'now/**/*.html',
    '*.markdown',
    'index.html'
  ],
  theme: {
    colors: {
      primary: "#4ade80"
    },
    extend: {

    },
  },
  plugins: [],
}