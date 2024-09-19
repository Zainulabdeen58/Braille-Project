/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors :{
            primary: "#000000",
            primary_alt: "#191919",
            secondary:"#ffffff",
            secondary_alt: "#a4e84c",
      },
      screens: {
           'xsm': '320px', 
           'sm':'426px',
           'md' : '768px',
           'lg' : '1024px',
           'xlg' : '1240px',
           '2xlg' : '1440px'        
      },
      
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "base-100": "#ffffff",  // Custom base background color
        },
      },
    ],
  },
}