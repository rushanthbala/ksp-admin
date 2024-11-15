/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backgroundColor: theme => ({
       ...theme('colors'),
       'primary': '#01959a',
       'secondary': '#484848',
       'subbg':'#e6e6e6',
       'danger': '#e3342f',
    })
  },
  plugins: [],
}

