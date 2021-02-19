module.exports = {
  purge: ['./src/pages/**/*.js', './src/components/**/*.js'], // remove unused styles in production
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: 'Josefin Sans',
    },
    extend: {
      colors: {
        bio0: '#020202',
        bio1: '#001351',
        bio2: '#0C62A1',
        bio3: '#24B9FD',
        bio4: '#30DEF3',
        bio5: '#86EFEC',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
