/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.html"],
  theme: {
    screens: {
      'xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif'],
        'Lato': ['Lato', 'sans-serif'],
      },
      colors: {
        'dark-prussian-blue-200': '#5e83ba',
        'prussian-blue': {
          '50': '#eef8ff',
          '100': '#ddf1ff',
          '200': '#b2e4ff',
          '300': '#6fd1ff',
          '400': '#22bbff',
          '500': '#00a2ff',
          '600': '#0081dd',
          '700': '#0066b3',
          '800': '#005693',
          '900': '#01497c',
          '950': '#012c50',
          '1000': '#18181C'
        },
      },
    },
    plugins: [],
  }
}
