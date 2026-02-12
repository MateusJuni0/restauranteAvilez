/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          500: '#D4AF37',
          600: '#B8941F',
        },
      },
      fontFamily: {
        serif: ['var(--font-inter)', 'serif'],
        sans: ['var(--font-outfit)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
