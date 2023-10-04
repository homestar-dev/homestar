/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      "transparent": "transparent",
      "white": "#FFFFFF",
      "black": "#000000",
      'blue': {
        200: '#BCE7FF',
        300: '#98BDDC',
        400: '#4193DD',
        500: '#1C609C',
        700: '#1E2B69',
        900: '#051250',
      },
      'grey': {
        100: '#F4F5F7',
        1000: "#30343F",
      },
      "yellow": {
        500: "#F8C425"
      },
      "red":{
        500: "#ef4444"
      }
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        "sm": "8px",
        'md': '20px',
        'lg': '32px',
      },
      fontFamily: {
        "futura-medium": ["Futura medium", "sans-serif"],
        "futura-bold": ["Futura bold", "sans-serif"],
        "futura-italic": ["Futura italic", "sans-serif"],
        "poppins": ["Poppins", "sans-serif"],
        "signo": ["Signature", "sans-serif"]
      },
    }
  },
  plugins: [],
};
