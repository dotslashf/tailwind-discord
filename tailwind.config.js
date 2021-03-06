module.exports = {
  purge: ['./src/**/*.{js, jsx, ts, tsx}', './public/index.html'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Whitney', 'ui-sans-serif'],
    },
    extend: {
      colors: {
        discord: {
          blue: {
            default: '#404EED',
            light: '#7289da',
          },
          content: {
            darker: '#292B2F',
            dark: '#2F3136',
            light: '#36393F',
          },
          shade: {
            darkest: '#18191C',
            darker: '#23272A',
            dark: '#2C2F33',
            gray: '#B9BBBE',
            grayLight: '#F6F6F6',
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
