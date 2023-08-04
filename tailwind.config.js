/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/index.html',
    './app/templates/**/*.hbs',
    './app/components/**/*.hbs',
  ],
  theme: {
    extend: {},
    theme: {
      fontFamily: {
        display: ['Oswald'],
        body: ['"Open Sans"'],
      },
    },
  },
  plugins: [],
};
