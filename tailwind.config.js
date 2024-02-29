/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,jsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'login-bg': "url('/img/hero-pattern.svg')",
      }
    },
  },
  plugins: [],
}

