/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#EFAC41',
      'secondary': '#E5F3BA',
      'button-color': '#b32900',
    }),
    textColor: {
      'primary': '#F0F0F0',
      'title': '#330a04',
      'subtitle': '#6c1305',
      'button': '#E5F3BA',
    },
    extend: {},
  },
  plugins: [],
}
