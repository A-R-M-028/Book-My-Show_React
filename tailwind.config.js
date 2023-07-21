/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // This is custom color palette
        'ashikur': {
          50: '#ecfbe6',
          100: '#d1edc3',
          200: '#b3e19e',
          300: '#96d578',
          400: '#79c952',
          500: '#5faf39',
          600: '#4a882b',
          700: '#34611e',
          800: '#1e3a10',
          900: '#051400',
        },
      },
    },
  },
  plugins: [],
};

