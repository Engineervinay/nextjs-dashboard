/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultConfig');

module.exports = {
  content: [ "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    ...defaultTheme,
    colors: {
      ...defaultTheme.colors,
      primary: "#3B81F6",
      white: '#ffffff',
      bgcolor: '#1B63D1',
      fgcolor:'#F1F4F9',
      searchbar:'#E0E4ED',
      text: {
        DEFAULT: "#1F2937",
        light: "#6C7281",
      },
      light: {
        DEFAULT: "#FAFBFC",
        lighter: "#F3F4F6",
      },

    
    },
    extend: {},
   borderRadius: {
    'none': '0',
    'sm': '0.125rem',
    DEFAULT: '0.25rem',
    DEFAULT: '4px',
    'md': '0.375rem',
      'lg': '1.5rem',
      'full': '9999px',
      'large': '12px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
},
  plugins: [],
}
