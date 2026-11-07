/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        maroon: { DEFAULT: '#641C2B', dark: '#4A1320', light: '#7E2A3B' },
        beige: { DEFAULT: '#F7F0E6', deep: '#EEE3D2' },
        gold: { DEFAULT: '#C5A46D', light: '#DCC596' },
        brown: '#33251F',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Mulish', 'system-ui', 'sans-serif'],
      },
      boxShadow: { soft: '0 10px 30px -12px rgba(51,37,31,.25)' },
    },
  },
  plugins: [],
};
