const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',

  content: ['./src/**/*.{html,ts,tsx,vue}', './public/**/*.html'],

  future: {
    standardFontWeights: true,
    defaultLineHeights: true,
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },

  darkMode: 'media',

  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
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
      DEFAULT: '0.25rem',
    },

    borderColor: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',

      dark: {
        DEFAULT: 'var(--color-dark)',
      },
      white: {
        DEFAULT: 'var(--color-white)',
      },
    },

    colors: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',

      dark: {
        DEFAULT: 'var(--color-dark)',
      },
      white: {
        DEFAULT: 'var(--color-white)',
      },
    },

    fontSize: {
      base: '1rem',
      xs: '0.5rem',
      sm: '0.75rem',
      md: '1.5rem',
      lg: '1.75rem',
      xl: '2rem',
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
      borderColor: ['focus-visible'],
      opacity: ['responsive', 'hover'],
      borderWidth: ['responsive', 'hover'],
    },
  },
  plugins: [
    // require('@tailwindcss/ui'),
    // require('@tailwindcss/jit'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-children'),
    require('tailwindcss-interaction-variants'),
  ],
};
