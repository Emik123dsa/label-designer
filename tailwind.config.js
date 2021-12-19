const path = require('path');
const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');

const defaultTheme = require('tailwindcss/defaultTheme');

const defaultContent = [path.resolve('apps/**/*.{ts,tsx,html}')];

module.exports = {
  mode: 'jit',

  important: '#root',

  content: defaultContent.concat(
    createGlobPatternsForDependencies(
      path.join(__dirname, 'apps/label-designer/**/*.{ts,tsx,jsx,js,html}')
    )
  ),

  future: {
    standardFontWeights: true,
    defaultLineHeights: true,
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },

  darkMode: 'class',

  whitelist: ['dark-mode'],

  theme: {
    darkSelector: '.dark-mode',
  },

  theme: {
    extend: {
      ringWidth: {},
      boxShadow: {
        forms:
          '0 0 #0000, 0 0 #0000, 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
    fontFamily: {
      primary: ['var(--fonts-primary)', 'sans-serif'],
      secondary: ['var(--fonts-secondary)', 'sans-serif'],

      bold: ['var(--fonts-bold)', 'sans-serif'],
      thin: ['var(--fonts-thin)', 'sans-serif'],
      light: ['var(--fonts-light)', 'sans-serif'],
      medium: ['var(--fonts-medium)', 'sans-serif'],
      regular: ['var(--fonts-regular)', 'sans-serif'],
      semibold: ['var(--fonts-semibold)', 'sans-serif'],
      extrabold: ['var(--fonts-extrabold)', 'sans-serif'],
    },

    screens: {
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px',
    },

    space: {
      xs: '0.5rem',
      sm: '1rem',
      md: '1.5rem',
      lg: '2rem',
      xl: '2.5rem',
    },

    borderRadius: {
      none: '0rem',
      sm: '0.125rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      full: '9999px',
    },

    borderColor: {
      dark: 'var(--colors-dark)',
      white: 'var(--colors-white)',
      hawkes: {
        blue: 'var(--colors-hawkes-blue)',
      },
      primary: 'var(--colors-primary)',
      secondary: 'var(--colors-secondary)',
    },

    colors: {
      dark: 'var(--colors-dark)',
      hawkes: {
        blue: 'var(--colors-hawkes-blue)',
      },
      white: 'var(--colors-white)',
      primary: 'var(--colors-primary)',
      secondary: 'var(--colors-secondary)',
    },

    variables: {
      DEFAULT: {
        sizes: {},
        colors: {
          dark: {
            DEFAULT: '#282c34',
          },
          white: {
            DEFAULT: '#FFFFFF',
          },
          hawkes: {
            blue: '#DADCE0',
          },
          primary: {
            DEFAULT: '#0097d4',
          },
          secondary: {
            DEFAULT: '#e7000f',
          },
        },
        fonts: {
          primary: {
            DEFAULT: 'Montserrat Regular',
          },
          secondary: {
            DEFAULT: 'Montserrat Medium',
          },
          thin: { DEFAULT: 'Montserrat Thin' },
          medium: { DEFAULT: 'Montserrat Medium' },
          regular: { DEFAULT: 'Montserrat Regular' },
          light: { DEFAULT: 'Montserrat Light' },
          bold: { DEFAULT: 'Montserrat Bold' },
          semibold: { DEFAULT: 'Montserrat Semibold' },
          extrabold: { DEFAULT: 'Montserrat Extrabold' },
        },
      },
    },

    fontSize: {
      xs: '0.5rem',
      sm: '0.75rem',
      base: '1rem',
      md: '1.25rem',
      lg: '1.5rem',
      xl: '1.75rem',
      '2xl': '2rem',
    },

    container: {
      center: true,
      padding: '1.5rem',
    },
  },

  variantOrder: [
    'first',
    'last',
    'odd',
    'even',
    'visited',
    'checked',
    'group-hover',
    'group-focus',
    'focus-within',
    'hover',
    'focus',
    'focus-visible',
    'active',
    'group-disabled',
    'disabled',
  ],

  variants: {
    extend: {
      backgroundColor: [
        'dark',
        'dark-hover',
        'dark-group-hover',
        'dark-even',
        'dark-odd',
      ],
      borderColor: ['dark', 'dark-disabled', 'dark-focus', 'dark-focus-within'],
      textColor: ['dark', 'dark-hover', 'dark-active', 'dark-placeholder'],
    },
  },

  plugins: [
    /* require('@tailwindcss/ui'),
       require('@tailwindcss/jit'), */
    require('tailwindcss-dark-mode')(),
    require('@mertasan/tailwindcss-variables'),
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('tailwindcss-rtl'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-children'),
    require('tailwindcss-interaction-variants'),
  ],
};
