module.exports = {
  purge: ['./src/pages/**/*.js', './src/components/**/*.js'], // remove unused styles in production
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: 'Josefin Sans',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
