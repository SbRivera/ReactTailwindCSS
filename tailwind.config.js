/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: '#001f3f',
        lightBlue: '#0074D9',
      },
    },
  },
  plugins: [],
}
