/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      // color scheme is defined in /app.css
      transparent: 'transparent',
      current: 'currentColor',
      white: 'var(--color-white)',
      black: 'var(--color-black)',

      gray: {
        100: 'var(--color-gray-100)',
        200: 'var(--color-gray-200)',
        300: 'var(--color-gray-300)',
        400: 'var(--color-gray-400)',
        500: 'var(--color-gray-500)',
        600: 'var(--color-gray-600)',
        700: 'var(--color-gray-700)',
        800: 'var(--color-gray-800)',
        900: 'var(--color-gray-900)'
      },
      blueGray: {
        500: 'var(--color-blueGray-500)'
      },
      yellow: {
        500: 'var(--color-yellow-500)',
        '500-inverted': 'var(--color-yellow-500-inverted)'
      },
      blue: {
        100: 'var(--color-blue-100)',
        500: 'var(--color-blue-500)'
      },
      red: {
        500: 'var(--color-red-500)'
      },
      green: {
        100: 'var(--color-green-100)',
        500: 'var(--color-green-500)',
        600: 'var(--color-green-600)'
      }
    },
    extend: {}
  },
  plugins: [require('@tailwindcss/typography')]
}
