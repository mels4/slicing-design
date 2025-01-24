/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'violet-50': '#EEEAF2',
        'violet-100': '#CABCD7',
        'violet-200': '#B09CC4',
        'violet-300': '#8C6FA9',
        'violet-400': '#765399',
        'violet-500': '#54287F',
        'violet-600': '#4C2474',
        'violet-700': '#3C1C5A',
        'violet-800': '#2E1646',
        'violet-900': '#231135',
      },
    },
  },
  plugins: [],
}
