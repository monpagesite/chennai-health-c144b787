/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A5C5C',
        secondary: '#D4A574',
        accent: '#0A5C5C',
        background: '#FAF8F5',
        surface: '#FFFFFF',
        text: '#1A1A1A',
        'text-muted': '#6B6B6B',
        border: '#E8E3DC',
        emergency: '#C73E1D',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Source Sans Pro', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.02em',
      },
      lineHeight: {
        relaxed: '1.7',
      },
    },
  },
  plugins: [],
}
