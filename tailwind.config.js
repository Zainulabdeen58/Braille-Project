/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors :{
            primary: "#000000",
            secondary:"#ffffff",
            secondary_alt: "#a4e84c",
      },
      screens: {
           'xsm': '320px', 
           'sm':'425px',
           'md' : '768px',
           'lg' : '1024px',
           'xlg' : '1440px',         
      },
      
    },
  },
  plugins: [],
}