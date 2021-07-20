module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      orange: '#FE6D04',
      light: '#FFFFFF',
      dark: '#0d1117',
    },
    textColor: {

      'dark': '#323232',

      'light': '#FFFFFF',

      'orange': '#FE6D04',

      'secondary': "#e3e3e3"

    },
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
