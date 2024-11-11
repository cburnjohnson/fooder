/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      accent: '#EB5E28',
      'dark-100': '#403D39',
      'dark-200': '#252422',
      'light-100': '#FFFCF2',
      white: '#FFFFFF'
    },
    fontFamily: {
      'display': ['Luckiest Guy'],
      'sans': ['Poppins']
    },
    extend: {},
  },
  plugins: [],
}

