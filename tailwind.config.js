/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite-react/lib/esm/**/*.js'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1920px', // Adjusted breakpoint value
      xl: '1280px',
    },
    extend: {
      colors: {
        'error': '#FF0000',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
