/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        'todo-dark-brown': 'rgba(175, 47, 47, 0.15)',
        'todo-btn-darker-brown': 'rgba(175, 47, 47, 0.3)',
        'todo-darker-brown': 'rgba(150, 55, 55, 0.9)',
        'todo-offwhite': '#fefefe',
        'todo-white': '#fff',
        'todo-dark-white': '#cecece',
        'todo-default-color': '#4d4d4d',
        'todo-checkbox-default': '#d9d9d9',
        'todo-bg-color': 'whitesmoke',
        'todo-btn-color': '#777',
      },
      spacing: {
        'btn-padding': '0.4rem 0.8rem',
        'btn-margin': '0.4rem 0 0 1.2rem',
        'complete-btn-padding': '0.4rem 0.7rem',
      },
    },
  },
  plugins: [],
};
