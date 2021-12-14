const path = require('path');

module.exports = {
  ident: 'postcss',
  syntax: 'postcss-scss',
  map: false,
  plugins: {
    precss: {},
    cssnano: {},
    tailwindcss: {
      config: path.join(__dirname, './tailwind.config.js'),
    },
    autoprefixer: {
      flexbox: 'no-2009',
      grid: true,
    },

    'postcss-nested': {},
    'postcss-import': {},
    'postcss-flexbugs-fixes': {},
    'postcss-at-rules-variables': {},
    'postcss-each': {},
  },
};
