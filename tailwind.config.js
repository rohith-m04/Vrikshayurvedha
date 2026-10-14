/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        parchment: {
          50: '#FDFBF7',
          100: '#F9F6F0',
          200: '#F4EFE6',
          300: '#E8DEC8',
          400: '#D5C4A1',
          border: '#E2DACB',
        },
        botanical: {
          50: '#F0F5F2',
          100: '#DDE9E2',
          200: '#B8D3C4',
          700: '#2A5741',
          800: '#1E3E2F',
          900: '#142A20',
          950: '#0B1812',
        },
        terracotta: {
          500: '#B85D38',
          600: '#A14C29',
          700: '#843C1E',
        },
        ink: {
          900: '#191D1A',
          800: '#2C332E',
          700: '#464F49',
          500: '#6E7A72',
          400: '#94A098',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Cinzel"', '"Spectral"', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
