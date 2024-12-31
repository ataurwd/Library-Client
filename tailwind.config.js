/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5F55E9',
        secondary: '#292E37',
        gradientFrom: '#25CBD6', 
        gradientTo: '#00EE8A',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #C0C7F9, #C0C7F9)', 
      },
      fontFamily: {
        customRubik: ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
}