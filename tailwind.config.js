module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Barlow Semi Condensed', 'sans-serif'],
      serif: ['Barlow Semi Condensed', 'serif'],
    },
    extend: {
      fontSize: {
        13: '13px',
      },
      colors: {
        'mod-Violet': 'hsl(263, 55%, 52%)',
        'vdark-gry-Blue': 'hsl(217, 19%, 35%)',
        'vdark-blk-Blue': 'hsl(219, 29%, 14%)',
        'lght-Gray': 'hsl(0, 0%, 81%)',
        'lght-gry-Blue': 'hsl(210, 46%, 95%)',
        links: 'hsl(228, 45%, 44%);',
      },
      gridTemplateColumns: {
        0: 'minmax(0, 400px)',
        2: 'repeat(2, minmax(200px, 400px))',
      },
      gridTemplateRows: {
        2: 'repeat(2, min-content)',
        3: 'repeat(3, min-content)',
        5: 'repeat(5, auto)',
      },
      boxShadow: {
        'bx-shadow': '0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      },
      transitionDuration: {
        0.4: '0.4s',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
