/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  
  content: [
     "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
