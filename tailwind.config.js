module.exports = {
  purge: ['./src/pages/**/*.js', './src/components/**/*.js'], // remove unused styles in production
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: 'Titillium Web',
      arwes: 'Titillium Web',
      josefin: 'Josefin Sans',
    },
    extend: {
      colors: {
        arwes: '#7efcf6',
        arwes2: '#acf9fb',
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
