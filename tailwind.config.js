/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'sec-green': '#10b981',
        'sec-dark': '#071024',
        'sec-muted': '#0f1724'
      }
    },
  },
  plugins: [],
}
