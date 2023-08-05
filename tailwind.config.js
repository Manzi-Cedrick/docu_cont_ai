/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#00b19d',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
        'bdr': '#cbd5e1',
      }
    },
  },
  plugins: [],
}