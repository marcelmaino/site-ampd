/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./public/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#011225',
        'text-dark': '#231F20',
        indigo: '#2E3092',
        teal: '#076A97',
        cyan: '#00A2D1',
        'cyan-bright': '#00AEEF',
        'cyan-light': '#6CDCFC',
        lavender: '#B6B2D8',
        'lavender-light': '#E0DEEF',
        paper: '#F5FBFE',
      },
      fontFamily: {
        'outfit': ['Outfit', 'system-ui', 'sans-serif'],
        'atkinson': ['Atkinson Hyperlegible', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'pill': '9999px',
        'card': '24px',
        'card-lg': '32px',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(1, 18, 37, 0.08)',
        'card': '0 8px 32px rgba(1, 18, 37, 0.12)',
      },
    },
  },
  plugins: [],
}
