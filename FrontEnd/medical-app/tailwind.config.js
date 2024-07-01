// tailwind.config.js

module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
  extend: {
    colors: {
      'custom-light': '#f9f9fb',
      'custom-dark': '#161813',
      'custom-dark-green': '#454f31',
      'custom-gray': '#acb1b8',
      'custom-green': '#7da558',
      'custom-black': '#000000',
    },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
