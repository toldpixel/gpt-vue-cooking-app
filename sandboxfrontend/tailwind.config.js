/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        'happywhite': '#fffffe',
        'happybutton': '#00ebc7',
        'happyheadline': '#00214d',
      },
    },
  },
  plugins: [],
}

