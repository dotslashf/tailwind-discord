module.exports = {
  purge: ['./src/**/*.{js, jsx, ts, tsx}', './public/index.html'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        discord: {
          blue: {
            default: '#404EED',
            light: '#7289da',
          },
          content: {
            dark: '#2F3136',
            light: '#36393F',
          },
          shade: {
            darkest: '#23272A',
            dark: '#2C2F33',
            gray: '#99AAB5',
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
