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
      bgcolor: '#1E40AE',
      fgcolor:'#F1F4F9',
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
  
},
  plugins: [],
}
