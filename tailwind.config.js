/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./content/**/*.html",
    "./layouts/**/*.html",
    "./static/**/*.js",

  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary-color)',
          gray: '#434343',
          "dark-gray": '#212427'
        },
        secondary: '#1B2F30',
        light: '#F5F7FB',
      },
      screens: {
        'xl': '1274px',
        '2xl': '1640px'
      }
    },
    fontFamily: {
      lato: 'Lato, sans-serif',
      roboto: 'Roboto, sans-serif',
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),

  ],
}
